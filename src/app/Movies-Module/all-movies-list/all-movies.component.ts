import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { MovieSearchKeyWord, Movies } from 'src/app/_models/movies';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from 'src/app/_services/common';
import { FormControl } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
  providers: [ConfirmationService],
})
export class AllMoviesComponent implements OnInit {
  @ViewChild('AllMovieTable') AllMovieTable: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  moviesList: Movies[];
  fgsType: any;
  addEditMovie: boolean = false;
  editMode: boolean = false;
  screenshot: boolean = false;
  moviePoster: boolean = false;
  display: boolean = false;
  image: File;
  imageUrl;
  baseUrl: string = 'http://44.211.90.48';
  posterContent: any = undefined;
  posterContentThumb: any = undefined;
  screenShotImage: any = undefined;
  message: string;
  headerMessage: string;
  MovieSearchKeyWord: MovieSearchKeyWord;
  AllMoviesForm: FormGroup;
  PosterForm: FormGroup;
  columnSelectorForm = new FormGroup({});
  colsOptions: any[] = [];
  selectedColumns: any[] = [];
  filteredCols: any[] = [];

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private MoviesService: MoviesService,
    private CommonService: CommonService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService,
    private router: Router
  ) {
    this.AllMoviesForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      director: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      length: ['', [Validators.required]],
      posterContent: ['', [Validators.required]],
      posterContentThumb: [''],
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seconds: ['', [Validators.required]],
      isActive: [''],
    });
    this.PosterForm = this.fb.group({
      id: [''],
      title: [''],
    });
    this.columnSelectorForm = this.fb.group({
      selectedColumns: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.cols = [
      { field: 'title', show: true, headers: 'Movie Title' },
      { field: 'director', show: true, headers: 'Director' },
      { field: 'releaseYear', show: true, headers: 'Release Year' },
      { field: 'length', show: true, headers: 'Length' },
      { field: 'isActive', show: true, headers: 'Status' },
      { field: 'posterContentThumb', show: true, headers: 'Movie Poster' },
      //{ field: 'screenshot', show: true, headers: 'ScreenShot' },
      { field: 'admin-ss', show: true, headers: 'Screenshots' },
    ];
    this.MoviesService.MovieSearchKeyWord.subscribe((res) => {
      this.MovieSearchKeyWord = res;
    });
    this.colsOptions = this.cols.map((col) => ({
      label: col.headers,
      value: col.field,
    }));
    this.getMovieList();
  }

  SelectRequestedColumns() {
    this.selectedColumns =
      this.columnSelectorForm.controls['selectedColumns'].value;
    this.filteredCols = this.cols
      .filter((col) =>
        this.selectedColumns.some(
          (selectedCol) => selectedCol.value === col.field
        )
      )
      .map((col) => ({ headers: col.headers }));
  }

  shouldDisplayColumn(header: string): boolean {
    if (this.filteredCols.length === 0) {
      return true;
    }
    return this.filteredCols.some((col) => col.headers === header);
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
      this.moviesList = res;
      this.moviesList.map((item) => {
        item.posterContentThumb = this.baseUrl.concat(item.posterContentThumb);
        (item['HH'] = this.CommonService.consverIntoHHMMSS(item.length).HH),
          (item['MM'] = this.CommonService.consverIntoHHMMSS(item.length).MM),
          (item['SS'] = this.CommonService.consverIntoHHMMSS(item.length).SS);
      });
      this.allMovieSearch();
      this.ngxLoader.stop();
    });
  }
  applyFilterGlobal($event, stringVal) {
    switch (($event.target as HTMLInputElement).id) {
      case 'title':
        this.MovieSearchKeyWord.title = (
          $event.target as HTMLInputElement
        ).value;
        this.AllMovieTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'director':
        this.MovieSearchKeyWord.director = (
          $event.target as HTMLInputElement
        ).value;
        this.AllMovieTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'releaseYear':
        this.MovieSearchKeyWord.releaseYear = (
          $event.target as HTMLInputElement
        ).value;
        this.AllMovieTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'length':
        this.MovieSearchKeyWord.length = (
          $event.target as HTMLInputElement
        ).value;
        this.AllMovieTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      default:
    }
  }
  EditMovies(id) {
    this.addEditMovie = true;
    this.editMode = true;
    let moviesData = this.moviesList.filter((item) => item.id === id);
    this.AllMoviesForm.patchValue({
      id: id,
      title: moviesData[0].title,
      director: moviesData[0].director,
      releaseYear: moviesData[0].releaseYear,
      hours: this.CommonService.consverIntoHHMMSS(moviesData[0].length).HH,
      seconds: this.CommonService.consverIntoHHMMSS(moviesData[0].length).SS,
      minutes: this.CommonService.consverIntoHHMMSS(moviesData[0].length).MM,
    });
    this.posterContentThumb = moviesData[0].posterContentThumb;
    this.headerMessage = 'Edit Movie';
    this.display = true;
  }
  AddMovies() {
    this.headerMessage = 'Add Movie';
    this.addEditMovie = true;
    this.editMode = false;
    this.AllMoviesForm.reset();
    this.display = true;
    this.posterContentThumb = null;
  }

  OnChangePosterContentthumb(event) {
    var reader = new FileReader();
    this.image = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.posterContentThumb = data.target.result;
    };
  }
  OnchangeScreenShot(event) {
    var reader = new FileReader();
    this.image = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.screenShotImage = data.target.result;
    };
  }
  deleteMovies(moviesId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Movies ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.MoviesService.deleteMovies(moviesId).subscribe((res) => {
          this.getMovieList();
        });
      },
    });
  }

  redirectToAdminSS(movieId: any, movieTitle: any) {
    const url = `/Movies/admin-screenshots/${movieId}/${movieTitle}`;
    this.router.navigate([url]);
  }

  markAsActive(id: number, Status: boolean) {
    if (Status) {
      this.message = 'Are you sure that you want to mark as Active';
    } else {
      this.message = 'Are you sure that you want to mark as InActive';
    }
    this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        let filterData = this.moviesList.filter((item) => item.id === id);
        filterData[0].posterContentThumb =
          filterData[0].posterContentThumb.split('http://44.211.90.48/')[1];
        filterData[0].isActive = Status;
        this.MoviesService.markAsActive(filterData[0]).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess(
              ' Status change successfully',
              'Status change'
            );
            this.getMovieList();
          }
        });
      },
    });
  }

  Submit() {
    const id = this.AllMoviesForm.controls['id'].value;
    const Title = this.AllMoviesForm.controls['title'].value;
    const Director = this.AllMoviesForm.controls['director'].value;
    const ReleaseYear = this.AllMoviesForm.controls['releaseYear'].value;
    const Hour = this.AllMoviesForm.controls['hours'].value;
    const Minute = this.AllMoviesForm.controls['minutes'].value;
    const Seconds = this.AllMoviesForm.controls['seconds'].value;
    const PosterImage = this.image;
    if (
      !Title ||
      !Director ||
      !ReleaseYear ||
      !Hour ||
      !Minute ||
      !Seconds ||
      !PosterImage
    ) {
      this.toastr.showWarning(
        'Please fill out all the fields before submitting the form',
        'Form incomplete'
      );
    } else {
      const payload = {
        id: id,
        Title: Title,
        Director: Director,
        ReleaseYear: ReleaseYear,
        Hour: Hour,
        Minute: Minute,
        Seconds: Seconds,
        IsActive: false,
        PosterImage: PosterImage,
      };
      this.ngxLoader.start();
      if (this.editMode) {
        this.MoviesService.editMovies(payload).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess(
              'Movie data is updated successfully',
              'movie data'
            );
            this.display = false;
            this.getMovieList();
          } else {
            this.toastr.showSuccess('Something going wrong', 'Please check');
            this.display = false;
            this.getMovieList();
          }
        });
      }
      if (!this.editMode) {
        this.MoviesService.Submit(payload).subscribe({
          next: (response) => {
            this.toastr.showSuccess(
              'Movie is added successfully',
              'Movie data'
            );
            this.display = false;
            this.getMovieList();
          },
          error: (error) => {
            this.display = false;
            this.getMovieList();
            alert(error.error.message);
            console.log(error.error.message);
            this.toastr.showWarning('Something going wrong', 'Please check');
            this.display = false;
            this.getMovieList();
          },
          complete: () => {},
        });
      }
    }
  }
  updateMoviePoster(id) {
    this.headerMessage = 'Upload Movie Poster';
    this.addEditMovie = false;
    this.moviePoster = true;
    this.screenshot = false;
    let moviesData = this.moviesList.filter((item) => item.id === id);
    this.PosterForm.patchValue({
      title: moviesData[0].title,
      id: id,
    });
    this.posterContentThumb = moviesData[0].posterContentThumb;
    this.display = true;
  }

  submitMoviePosterData() {
    const id = this.PosterForm.controls['id'].value;
    const image = this.image;
    if (!id || !image) {
      this.toastr.showWarning(
        'Please fill out all the fields before submitting the form',
        'Form incomplete'
      );
    } else {
      const payload = {
        id: id,
        PosterImage: image,
      };
      this.display = false;
      this.ngxLoader.start();
      this.MoviesService.submitMoviePosterData(payload).subscribe((res) => {
        if (res) {
          this.toastr.showSuccess(
            'Movie poster is updated successfully',
            'Movie poster'
          );
          this.display = false;
          this.getMovieList();
        } else {
          this.toastr.showSuccess('somthing going wrong', 'please check');
          this.display = false;
          this.getMovieList();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord);
    this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord);
  }

  allMovieSearch() {
    if (
      this.MovieSearchKeyWord.title != null &&
      this.MovieSearchKeyWord.title.trim().length > 0
    ) {
      this.AllMovieTable.filter(
        this.MovieSearchKeyWord.title,
        'title',
        'contains'
      );
    }
    if (
      this.MovieSearchKeyWord.director != null &&
      this.MovieSearchKeyWord.director.trim().length > 0
    ) {
      this.AllMovieTable.filter(
        this.MovieSearchKeyWord.director,
        'director',
        'contains'
      );
    }
    if (
      this.MovieSearchKeyWord.releaseYear != null &&
      this.MovieSearchKeyWord.releaseYear.trim().length > 0
    ) {
      this.AllMovieTable.filter(
        this.MovieSearchKeyWord.releaseYear,
        'releaseYear',
        'contains'
      );
    }
    if (
      this.MovieSearchKeyWord.length != null &&
      this.MovieSearchKeyWord.length.trim().length > 0
    ) {
      this.AllMovieTable.filter(
        this.MovieSearchKeyWord.length,
        'length',
        'contains'
      );
    }
    if (
      this.MovieSearchKeyWord.Gsearch != null &&
      this.MovieSearchKeyWord.Gsearch.trim().length > 0
    ) {
      this.AllMovieTable.filterGlobal(
        this.MovieSearchKeyWord.Gsearch,
        'contains'
      );
    }
  }
  FilterGlobal($event, stringVal) {
    this.MovieSearchKeyWord.Gsearch = ($event.target as HTMLInputElement).value;
    this.AllMovieTable.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
}
