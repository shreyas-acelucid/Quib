import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MoviesService } from 'src/app/_services/movies.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Movies } from 'src/app/_models/movies';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators, FormArray, } from '@angular/forms';
import { ConfirmationService, SortEvent } from 'primeng/api';
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
  Status:boolean=true;
  display: boolean = false;
  image: File;
  imageUrl;
  baseUrl:string="http://3.88.43.237"
  posterContent: any = undefined;
  posterContentThumb: any = undefined;
  message: string;
  AllMoviesForm: FormGroup
  PosterForm:FormGroup
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
    this.PosterForm  = this.fb.group({
      id:[''],
      title:[''],
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
      this.moviesList.map(item=>{
        item.posterContentThumb  = this.baseUrl.concat(item.posterContentThumb)
        item['HH'] = this.consverIntoHHMMSS(item.length).HH,
        item['MM'] = this.consverIntoHHMMSS(item.length).MM,
        item['SS']  = this.consverIntoHHMMSS(item.length).SS
      })
      this.ngxLoader.stop();
    })
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  EditMovies(id) {
    this.Status=true;
    let moviesData = this.moviesList.filter(item => item.id === id)
    this.AllMoviesForm.patchValue({
      title: moviesData[0].title,
      director: moviesData[0].director,
      releaseYear: moviesData[0].releaseYear,
      hours: this.consverIntoHHMMSS(moviesData[0].length).HH,
      seconds: this.consverIntoHHMMSS(moviesData[0].length).SS,
      minutes: this.consverIntoHHMMSS(moviesData[0].length).MM
    })
    this.posterContentThumb=moviesData[0].posterContentThumb
   this.display = true
  }
  AddMovies() {
    this.Status = true;
    this.AllMoviesForm.reset()
    this.display = true
    this.posterContentThumb = null
  }
 
  OnChangePosterContentthumb(event) {
    var reader = new FileReader();
    this.image  = event.target.files[0]
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.posterContentThumb = data.target.result
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
    if (!this.Status) {
      this.submitMoviePosterData()
    } else {
      this.MoviesService.Submit(payload).subscribe(res => {
        if (res) {
          this.toastr.showSuccess(" Status change successfully", "Status change")
          this.getMovieList()
        }else{
          this.toastr.showSuccess("somthing going wrong", "please check")
          this.getMovieList()
        }
      })
    }
  } 
  updateMoviePoster(id){
    this.Status = false
    let moviesData = this.moviesList.filter(item => item.id === id)
    this.PosterForm.patchValue({
      title: moviesData[0].title,
      id:id
    })
    this.posterContentThumb=moviesData[0].posterContentThumb
   this.display = true
  }
  submitMoviePosterData(){
    this.display = false
    this.Status= true;
    const payload  =  {
      id:this.PosterForm.controls['id'].value,
      PosterImage :this.image
    }
    this.MoviesService.submitMoviePosterData(payload).subscribe(res=>{
      if (res) {
        this.toastr.showSuccess(" Movie poster is updated successfully", "movie poster")
        this.getMovieList()
      }else{
        this.toastr.showSuccess("somthing going wrong", "please check")
        this.getMovieList()
      }
    })
  }

 
}

