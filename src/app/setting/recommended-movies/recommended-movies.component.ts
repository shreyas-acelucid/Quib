import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  RecommendedMovies: [] = []
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.GetRecommendedMovies()
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  async GetRecommendedMovies() {
    this.ngxLoader.start();
    (await this.QuibService.GetRecommendedMovies()).subscribe({
      next: (response: any) => {
        this.RecommendedMovies = response
        this.toastr.showSuccess('TOS fetched successfully', 'TOS');
        this.ngxLoader.stop();
      },
      error: (error) => {
        this.toastr.showError('Failed to fetch TOS', 'TOS');
        this.ngxLoader.stop();
      },
      complete: () => { },
    });
  }
}
