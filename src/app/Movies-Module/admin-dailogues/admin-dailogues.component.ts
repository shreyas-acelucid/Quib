import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { QuibService } from 'src/app/_services/Quib.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-admin-dailogues',
  templateUrl: './admin-dailogues.component.html',
  styleUrls: ['./admin-dailogues.component.scss'],
})
export class AdminDailoguesComponent implements OnInit {
  allDialogues: any[] = [];
  movieTitle: string = '';
  movieId: number = 0;
  constructor(
    private QuibService: QuibService,
    private route: ActivatedRoute,
    private toastr: ToastrMsgService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('movieId')) || 0;
      this.movieTitle = params.get('movieTitle') || '';
      this.fetchMovieDialogues();
    });
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

  async fetchMovieDialogues() {
    (await this.QuibService.fetchDialogues(this.movieId)).subscribe({
      next: (response: any[]) => {
        this.allDialogues = response.filter(
          (dialogue) => !dialogue.isScreenshot
        );
        this.toastr.showSuccess(
          'All dialogues fetched successfully!',
          'Dialogues'
        );
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
