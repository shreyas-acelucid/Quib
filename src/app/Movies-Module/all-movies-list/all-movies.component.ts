import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Movies } from 'src/app/_models/movies';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormArray, } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
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
  display: boolean = false;
  image: File;
  imageUrl;
  posterContent: any = undefined;
  posterContentThumb: any = undefined;
  message: string;
  AllMoviesForm: FormGroup
  constructor(private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private MoviesService: MoviesService,
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
    ]
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
      this.ngxLoader.stop();
    })
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  EditMovies(id) {
    let moviesData = this.moviesList.filter(item => item.id === id)
    console.log(moviesData)
    this.AllMoviesForm.patchValue({
      title: moviesData[0].title,
      director: moviesData[0].director,
      releaseYear: moviesData[0].releaseYear,
      hours: this.consverIntoHHMMSS(moviesData[0].length).HH,
      seconds: this.consverIntoHHMMSS(moviesData[0].length).SS,
      minutes: this.consverIntoHHMMSS(moviesData[0].length).MM
    })
    if (moviesData[0].posterContentThumb.search("Images") > 1) {
      this.posterContentThumb = `http://3.88.43.237${moviesData[0].posterContentThumb}`
    } else {
      this.posterContentThumb = `data:image/png;base64,${moviesData[0].posterContentThumb}`
    }

    if (moviesData[0].posterContentThumb.search("Images") > 1) {
      this.posterContent = `http://3.88.43.237${moviesData[0].posterContentThumb}`
    } else {
      this.posterContent = `data:image/png;base64,${moviesData[0].posterContent}`
    }
    this.display = true
  }
  AddMovies() {
    this.AllMoviesForm.reset()
    this.display = true
  }
  OnChangePosterContent(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.posterContent = data.target.result
    }
  }

  OnChangePosterContentthumb(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.posterContentThumb = data.target.result
      console.log(this.posterContentThumb)
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
}
