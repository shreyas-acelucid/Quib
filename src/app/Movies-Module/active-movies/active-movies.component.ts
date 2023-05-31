import { Component, OnInit, ViewChild ,OnDestroy } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { MovieSearchKeyWord, Movies } from 'src/app/_models/movies';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_services/common'
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-active-movies',
  templateUrl: './active-movies.component.html',
  styleUrls: ['./active-movies.component.scss'],
  providers: [ConfirmationService]
})
export class ActiveMoviesComponent implements OnInit {
  @ViewChild('ActiveMovieTable') ActiveMovieTable: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList: Movies[] = []
  fgsType: any;
  display: boolean = false;
  ActiveMoviesForm: FormGroup
  image: File;
  MovieSearchKeyWord: MovieSearchKeyWord;
  imageUrl;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private MoviesService: MoviesService,
    private toastr: ToastrMsgService,
    private CommonService: CommonService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
  ) {
    this.ActiveMoviesForm = this.fb.group({
      Director: ["", [Validators.required]],
      File: ['', [Validators.required]],
      IsActive: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      Length: ['', [Validators.required]],
      PosterContent: ['', [Validators.required]],
      PosterContentThumb: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
      Rating: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'title', show: true, headers: 'Movie title' },
      { field: 'director', show: true, headers: 'Director' },
      { field: 'releaseyear', show: true, headers: 'Release Year' },
      { field: 'length', show: true, headers: 'Length' },
      { field: 'isActive', show: true, headers: 'Is Active' },
    ]
    this.MoviesService.MovieSearchKeyWord.subscribe(res => {
      this.MovieSearchKeyWord = res;
    })
    this.getMovieList()
   }
   onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getMovieList() {
    this.MoviesService.getMovieList().subscribe((res) => {
      this.moviesList = res.filter(item => item.isActive === true)
      this.moviesList.map(item=>{
          item['HH'] = this.CommonService.consverIntoHHMMSS(item.length).HH,
          item['MM'] = this.CommonService.consverIntoHHMMSS(item.length).MM,
          item['SS'] = this.CommonService.consverIntoHHMMSS(item.length).SS
      })
      this.activeMovieSearch();
      this.ngxLoader.stop();
    })
  }

  applyFilterGlobal($event, stringVal) {
    switch (($event.target as HTMLInputElement).id) {
      case "title":
        this.MovieSearchKeyWord.title = ($event.target as HTMLInputElement).value;
        this.ActiveMovieTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "director":
        this.MovieSearchKeyWord.director = ($event.target as HTMLInputElement).value;
        this.ActiveMovieTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "releaseYear":
        this.MovieSearchKeyWord.releaseYear = ($event.target as HTMLInputElement).value;
        this.ActiveMovieTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "length":
        this.MovieSearchKeyWord.length = ($event.target as HTMLInputElement).value;
        this.ActiveMovieTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      default:
    }
  }
  EditMovies(id) {
    let moviesData = this.moviesList.filter(item => item.id === id)
    this.ActiveMoviesForm.patchValue({
      Director: moviesData[0].director,
      Title: moviesData[0].title,
    })
    this.display = true
  }
  AddMovies() {
    this.ActiveMoviesForm.reset()
    this.display = true
  }
  OnChange(event) {
    this.image = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.imageUrl = data.target.result;
    }
  }
  deleteMovies(moviesId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete Active Movies ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.MoviesService.deleteMovies(moviesId).subscribe((res) => {
          this.getMovieList()
        })
      },
    });

  }
  ngOnDestroy():void {
    this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord);
    this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord);
  }
  activeMovieSearch() {
    if (this.MovieSearchKeyWord.title != null && this.MovieSearchKeyWord.title.trim().length > 0) {
      this.ActiveMovieTable.filter(this.MovieSearchKeyWord.title, "title", "contains");
    }
    if (this.MovieSearchKeyWord.director != null && this.MovieSearchKeyWord.director.trim().length > 0) {
      this.ActiveMovieTable.filter(this.MovieSearchKeyWord.director, "director", "contains");
    }
    if (this.MovieSearchKeyWord.releaseYear != null && this.MovieSearchKeyWord.releaseYear.trim().length > 0) {
      this.ActiveMovieTable.filter(this.MovieSearchKeyWord.releaseYear, "releaseYear", "contains");
    }
    if (this.MovieSearchKeyWord.length != null && this.MovieSearchKeyWord.length.trim().length > 0) {
      this.ActiveMovieTable.filter(this.MovieSearchKeyWord.length, "length", "contains");
    }
    if(this.MovieSearchKeyWord.Gsearch != null && this.MovieSearchKeyWord.Gsearch.trim().length > 0){
      this.ActiveMovieTable.filterGlobal(this.MovieSearchKeyWord.Gsearch,"contains")
    }
  }
   FilterGlobal($event, stringVal) {
    this.MovieSearchKeyWord.Gsearch = ($event.target as HTMLInputElement).value;
    this.ActiveMovieTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
 