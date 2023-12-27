import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ActivatedRoute } from '@angular/router';
import { min } from 'moment';
import { ThemePalette } from '@angular/material/core';
import { error } from 'console';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-admin-screenshots',
  templateUrl: './admin-screenshots.component.html',
  styleUrls: ['./admin-screenshots.component.scss'],
})
export class AdminScreenshotsComponent implements OnInit {
  movieId: number;
  movieTitle: string;
  allScreenshots: any[] = [];
  checked: boolean = true;
  disabled: boolean = false;
  color: ThemePalette = 'accent';
  serverBaseUrl: string = 'http://44.211.90.48/';
  private pageX: number;
  timeRangeSelectionForm = new FormGroup({});
  timeRangeSelector: boolean = false;
  display: boolean = false;
  message: string = '';
  image: File;
  screenShotImage: any = undefined;
  AddScreenshot: boolean = false;
  AddScreenshotForm = new FormGroup({});
  posterContentThumb: any = undefined;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastr: ToastrMsgService,
    private fb: FormBuilder
  ) {
    this.timeRangeSelectionForm = this.fb.group({
      fromHours: ['', [Validators.required]],
      fromMinutes: ['', [Validators.required]],
      fromSeconds: ['', [Validators.required]],
      toHours: ['', [Validators.required]],
      toMinutes: ['', [Validators.required]],
      toSeconds: ['', [Validators.required]],
    });
    this.AddScreenshotForm = this.fb.group({
      posterContentThumb: ['', [Validators.required]],
      posterContent: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('movieId')) || 0;
      this.movieTitle = params.get('movieTitle') || '';
      this.getAdminScreenshots();
    });
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.pageX = event.touches[0].pageX;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const deltaX = this.pageX - event.touches[0].pageX;
    this.renderer.setStyle(
      document.body,
      'transform',
      `translateX(-${deltaX}px)`
    );
  }

  @HostListener('touchend')
  onTouchEnd() {
    // Optional: Implement logic for additional actions on touch end
  }

  async getAdminScreenshots() {
    this.ngxLoader.start();
    (await this.QuibService.getAdminScreenshots(this.movieId)).subscribe({
      next: (response: any[]) => {
        this.allScreenshots = response;
        this.toastr.showSuccess(
          'All screenshots fetched successfully',
          'Screenshots'
        );
        this.ngxLoader.stop();
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
        this.ngxLoader.stop();
      },
      complete: () => {},
    });
  }

  getFullImageUrl(relativeUrl: string): string {
    return this.serverBaseUrl + relativeUrl;
  }

  getTitle(): string {
    return `${this.movieTitle} Screenshots`;
  }

  getTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = this.padZero(hours);
    const formattedMinutes = this.padZero(minutes);
    const formattedSeconds = this.padZero(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  async updateIsSelected(QuibId: number, event: MatSlideToggleChange) {
    const checked: boolean = event.checked;
    (await this.QuibService.updateIsSelected(QuibId, checked)).subscribe({
      next: (response) => {
        console.log(response);
        if (checked) {
          this.toastr.showSuccess('Screenshot selected', 'Screenshot');
        } else {
          this.toastr.showWarning('Screenshot unselected', 'Screenshot');
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async getSelectedScreenshots() {
    (
      await this.QuibService.getSelectedScreenshots(this.movieId, true)
    ).subscribe({
      next: (response: any[]) => {
        this.allScreenshots = response;
        this.toastr.showSuccess(
          'Selected screenshots fetched successfully',
          'Screenshots'
        );
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async getUnSelectedScreenshots() {
    (
      await this.QuibService.getSelectedScreenshots(this.movieId, false)
    ).subscribe({
      next: (response: any[]) => {
        this.allScreenshots = response;
        if (this.allScreenshots.length == 0) {
          this.toastr.showError(
            'Oops there are no unselected screenshots',
            'Screenshots'
          );
        } else {
          this.toastr.showWarning(
            'Unselected screenshots fetched successfully',
            'Screenshots'
          );
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async fetchScreenshotsbyTime() {
    const fromHours: number =
      this.timeRangeSelectionForm.controls['fromHours'].value;
    const toHours: number =
      this.timeRangeSelectionForm.controls['toHours'].value;
    const fromMinutes: number =
      this.timeRangeSelectionForm.controls['fromMinutes'].value;
    const toMinutes: number =
      this.timeRangeSelectionForm.controls['toMinutes'].value;
    const fromseconds: number =
      this.timeRangeSelectionForm.controls['fromSeconds'].value;
    const toSeconds: number =
      this.timeRangeSelectionForm.controls['toSeconds'].value;

    // if (
    //   !fromHours ||
    //   !toHours ||
    //   !fromMinutes ||
    //   !toMinutes ||
    //   !fromseconds ||
    //   !toSeconds
    // ) {
    //   this.toastr.showWarning(
    //     'Please fill out all the fields before submitting',
    //     'Oops!'
    //   );
    // } else {
    const fromTime = fromHours * 3600 + fromMinutes * 60 + fromseconds;
    const toTime = toHours * 3600 + toMinutes * 60 + toSeconds;

    if (fromTime > toTime) {
      this.toastr.showError('From Time should be less than To time', 'Oops!');
    } else {
      this.display = false;
      this.timeRangeSelector = false;
      (
        await this.QuibService.fetchScreenshotsByTimeRange(
          this.movieId,
          fromTime,
          toTime
        )
      ).subscribe({
        next: (response: any[]) => {
          this.allScreenshots = response;
          this.toastr.showSuccess(
            'Screenshots fetched for a particular time range',
            'Screenshots'
          );
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
      //}
    }
  }

  OnchangeScreenShot(event) {
    var reader = new FileReader();
    this.image = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.screenShotImage = data.target.result;
    };
  }

  async SubmitScreenshots() {
    const hours = this.AddScreenshotForm.controls['hours'].value;
    const minutes = this.AddScreenshotForm.controls['minutes'].value;
    const seconds = this.AddScreenshotForm.controls['seconds'].value;

    const time = hours * 3600 + minutes * 60 + seconds;
    const ScreenShotImage = this.image;

    // const payload = {
    //   MovieId: this.movieId,
    //   Screenshot: ScreenShotImage,
    //   UserId: 'a6ec419c-e8c4-48f9-874a-6f1eb9421464',
    //   Time: time,
    // };

    const formData = new FormData();
    formData.append('MovieId', this.movieId.toString());
    formData.append('Screenshot', ScreenShotImage);
    formData.append('UserId', 'a6ec419c-e8c4-48f9-874a-6f1eb9421464');
    formData.append('Time', time.toString());
    this.display = false;
    this.AddScreenshot = false;
    (await this.QuibService.addScreenShots(formData)).subscribe({
      next: (response: any) => {
        this.toastr.showSuccess(`${response.message}`, 'Screenshot');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
