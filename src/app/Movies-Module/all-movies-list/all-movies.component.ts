import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { MovieSearchKeyWord, Movies } from 'src/app/_models/movies';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormArray, } from '@angular/forms';
import { ConfirmationService, SortEvent } from 'primeng/api';
import { CommonService } from 'src/app/_services/common'
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
  providers: [ConfirmationService]
})
export class AllMoviesComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList: Movies[]
  fgsType: any;
  addEditMovie: boolean = false;
  screenshot: boolean = false;
  moviePoster: boolean = false;
  display: boolean = false;
  image: File;
  imageUrl;
  baseUrl: string = "http://44.211.90.48"
  posterContent: any = undefined;
  posterContentThumb: any = undefined;
  screenShotImage: any = undefined
  message: string;
  MovieSearchKeyWord: MovieSearchKeyWord
  AllMoviesForm: FormGroup
  PosterForm: FormGroup
  constructor(private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private MoviesService: MoviesService,
    private CommonService: CommonService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService,) {
    this.AllMoviesForm = this.fb.group({
      id: [''],
      title: ["", [Validators.required]],
      director: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      length: ['', [Validators.required]],
      posterContent: ['', [Validators.required]],
      posterContentThumb: [''],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
      isActive: ['']
    })
    this.PosterForm = this.fb.group({
      id: [''],
      title: [''],
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'title', show: true, headers: 'Title' },
      { field: 'director', show: true, headers: 'Director' },
      { field: 'releaseYear', show: true, headers: 'Release Year' },
      { field: 'length', show: true, headers: 'Length' },
      { field: 'isActive', show: true, headers: 'Status' },
      { field: 'posterContentThumb', show: true, headers: 'Movie Poster' },
      { field: 'screenshot', show: true, headers: 'ScreenShot' },
    ]
    if (this.CommonService.getMovieSearchWord() != null) {
      this.MoviesService.MovieSearchKeyWord.next(this.CommonService.getMovieSearchWord());
    }
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
      this.moviesList = res
      this.moviesList.map(item => {
        item.posterContentThumb = this.baseUrl.concat(item.posterContentThumb)
        item['HH'] = this.consverIntoHHMMSS(item.length).HH,
          item['MM'] = this.consverIntoHHMMSS(item.length).MM,
          item['SS'] = this.consverIntoHHMMSS(item.length).SS
      })
      this.movieSearch()
      this.ngxLoader.stop();
    })
  }
  applyFilterGlobal($event, stringVal) {
    switch (($event.target as HTMLInputElement).id) {
      case "title":
        this.MovieSearchKeyWord.title = ($event.target as HTMLInputElement).value;
        this.dt.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "director":
        this.MovieSearchKeyWord.director = ($event.target as HTMLInputElement).value;
        this.dt.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "releaseYear":
        this.MovieSearchKeyWord.releaseYear = ($event.target as HTMLInputElement).value;
        this.dt.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case "length":
        this.MovieSearchKeyWord.length = ($event.target as HTMLInputElement).value;
        this.dt.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      default:
    }
  }
  EditMovies(id) {
    this.addEditMovie = true;
    let moviesData = this.moviesList.filter(item => item.id === id)
    this.AllMoviesForm.patchValue({
      title: moviesData[0].title,
      director: moviesData[0].director,
      releaseYear: moviesData[0].releaseYear,
      hours: this.consverIntoHHMMSS(moviesData[0].length).HH,
      seconds: this.consverIntoHHMMSS(moviesData[0].length).SS,
      minutes: this.consverIntoHHMMSS(moviesData[0].length).MM
    })
    this.posterContentThumb = moviesData[0].posterContentThumb
    this.display = true
  }
  AddMovies() {
    this.addEditMovie = true;
    this.AllMoviesForm.reset()
    this.display = true
    this.posterContentThumb = null
  }

  OnChangePosterContentthumb(event) {
    var reader = new FileReader();
    this.image = event.target.files[0]
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.posterContentThumb = data.target.result
    }
  }
  OnchangeScreenShot(event) {
    var reader = new FileReader();
    this.image = event.target.files[0]
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.screenShotImage = data.target.result
    }
  }
  deleteMovies(moviesId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Movies ?',
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
  markAsActive(id: number, Status: boolean) {
    if (Status) {
      this.message = "Are you sure that you want to mark as Active"
    } else {
      this.message = "Are you sure that you want to mark as InActive"
    }
    this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.MoviesService.markAsActive(id, Status).subscribe(res => {
          if (res) {
            this.toastr.showSuccess(" Status change successfully", "Status change")
            this.getMovieList()
          }
        })
      },
    });
  }

  consverIntoHHMMSS(value) {
    const HH = (value / 3600).toString().split(".")[0];
    const Rem = (value % 3600);
    const MM = (Rem / 60).toString().split(".")[0];
    const SS = (Rem % 60);
    return {
      MM: MM,
      HH: HH,
      SS: SS
    }
  }
  Submit() {
    const payload = {
      Title: this.AllMoviesForm.controls['title'].value,
      Director: this.AllMoviesForm.controls['director'].value,
      ReleaseYear: this.AllMoviesForm.controls['releaseYear'].value,
      Hour: this.AllMoviesForm.controls['hours'].value,
      Minute: this.AllMoviesForm.controls['minutes'].value,
      Seconds: this.AllMoviesForm.controls['seconds'].value,
      IsActive: true,
      PosterImage: this.image
    }
    this.ngxLoader.start();
    this.MoviesService.Submit(payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Movie data is updated successfully", "movie data")
        this.getMovieList()
      } else {
        this.toastr.showSuccess("somthing going wrong", "please check")
        this.getMovieList()
      }
    })
  }
  updateMoviePoster(id) {
    this.addEditMovie = false;
    this.moviePoster = true;
    this.screenshot = false;
    let moviesData = this.moviesList.filter(item => item.id === id)
    this.PosterForm.patchValue({
      title: moviesData[0].title,
      id: id
    })
    this.posterContentThumb = moviesData[0].posterContentThumb
    this.display = true
  }
  submitMoviePosterDatas() {
    this.display = false
    const payload = {
      id: this.PosterForm.controls['id'].value,
      PosterImage: this.image
    }
    this.MoviesService.submitMoviePosterData(payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Movie poster is updated successfully", "movie poster")
        this.getMovieList()
      } else {
        this.toastr.showSuccess("somthing going wrong", "please check")
        this.getMovieList()
      }
    })
  }
  submitMoviePosterData() {
    this.display = false
    const payload = {
      id: this.PosterForm.controls['id'].value,
      PosterImage: this.image
    }
    return new Promise((resolve, reject) => {
      this.MoviesService.submitMoviePosterData(payload).toPromise().then(res => {
        this.toastr.showSuccess(" Movie poster is updated successfully", "movie poster")
        this.getMovieList()
      }).catch(err => {
        this.toastr.showSuccess("Movie poster is updated successfully", "movie poster")
        this.getMovieList()
      })
    });
  }

  ngOnDestroy(): void {
    this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord);
    this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord);
  }

  movieSearch() {
    if (this.MovieSearchKeyWord.title != null && this.MovieSearchKeyWord.title.trim().length > 0) {
      this.dt.filter(this.MovieSearchKeyWord.title, "title", "contains");
    }
    if (this.MovieSearchKeyWord.director != null && this.MovieSearchKeyWord.director.trim().length > 0) {
      this.dt.filter(this.MovieSearchKeyWord.director, "director", "contains");
    }
    if (this.MovieSearchKeyWord.releaseYear != null && this.MovieSearchKeyWord.releaseYear.trim().length > 0) {
      this.dt.filter(this.MovieSearchKeyWord.releaseYear, "releaseYear", "contains");
    }
    if (this.MovieSearchKeyWord.length != null && this.MovieSearchKeyWord.length.trim().length > 0) {
      this.dt.filter(this.MovieSearchKeyWord.length, "length", "contains");
    }
  }
}

