import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ActivatedRoute } from '@angular/router';
import { min } from 'moment';
import { ThemePalette } from '@angular/material/core';
import { error } from 'console';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

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

  constructor(
    private QuibService: QuibService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastr: ToastrMsgService
  ) {}

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
    (await this.QuibService.getAdminScreenshots(this.movieId)).subscribe({
      next: (response: any[]) => {
        this.allScreenshots = response;
        this.toastr.showSuccess(
          'All screenshots fetched successfully',
          'Screenshots'
        );
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
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
}
