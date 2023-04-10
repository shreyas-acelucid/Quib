import { Component, OnInit, ViewChild } from '@angular/core';
import { Quib_User,QUIB_USER } from 'src/app/_models/Quib_user';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movies } from 'src/app/_models/movies';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-quib-user',
  templateUrl: './quib-user.component.html',
  styleUrls: ['./quib-user.component.scss'],
  providers: [ConfirmationService]
})
export class QuibUserComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Quib_User: Quib_User[] = [];
  Approved_UserList:Quib_User[]=[];
  selectedMovies: Movies[] =[];
  moviesList: Movies[]
  movieId:any[] = [];
  fgsType: any;
  display: boolean = false;
  message: string;
  quibUserForm: FormGroup
  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
    private MoviesService:MoviesService,
    private confirmationService: ConfirmationService,
  ) {
    this.quibUserForm = this.fb.group({
      curator : ['', [Validators.required]],
      user: ['', [Validators.required]],
     })
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getUserList()
    this.getMovieList()
    this.cols = [
      { field: 'displayName', show: true, headers: 'Display Name' },
      { field: 'firstName', show: true, headers: 'First Name' },
      { field: 'lastName', show: true, headers: 'Last Name' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'createdDate', show: true, headers: 'Join' },
      { field: 'bumpCount', show: true, headers: 'BMP' },
      { field: 'followeeCount', show: true, headers: 'FNG' },
      { field: 'followerCount', show: true, headers: 'FRS' },
      { field: 'unPostedQuibsCount', show: true, headers: 'UNP' },
      { field: 'status', show: true, headers: 'Status' },
      {field:'IsModerator',show:true,headers:'Moderator Details'},
      {field:'IsModerator',show:true,headers:'IsModerator'},
      {field:'CS',show:true,headers:'CS'},
      {field:'CCP',show:true,headers:'CCP'},
      {field:'CFP',show:true,headers:'CFP'},
      {field:'TMQ',show:true,headers:'TMQ'},
      {field:'TQW',show:true,headers:'TQW'},
      {field:'AOR',show:true,headers:'AOR'},
      {field:'TBG',show:true,headers:'TBG'},
      {field:'TFR',show:true,headers:'TFR'}
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.deleteUser(userId).subscribe(res => {
          if (res) {
            this.toastr.showSuccess("user deleted successfully", "user delete")
            this.getUserList()
          }
        })
      },
    });

  }
  getUserList() {
    this.QuibService.getUserList().subscribe((data) => {
      this.Quib_User = data
      this.Approved_UserList =  data.filter(item=>item.isPending ===true)
      this.ngxLoader.stop();
    });
  }
  changeUserStatus(Id:string, Status: boolean) {
    if (Status) {
      this.message = 'Are you sure that you want to Approved user?'
    } else {
      this.message = 'Are you sure that you want to mark as Pending?'
    }
    this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.changeUserStatus(Id,Status).subscribe(res => {
          if (res) {
            this.toastr.showSuccess(" Status change successfully", "Status change")
            this.getUserList()
          }
        })
      },
    });
  }

  
  AssignMovieToModeratorUser() {
    this.ngxLoader.start();
    this.display=false
    this.selectedMovies.map(item=>{
      return this.movieId.push(item.id);
    })
    const payload  =  {
      UserId: this.quibUserForm.controls['user'].value,
      movieIds: this.movieId
    }
    this.QuibService.AssignMovieToModeratorUser(payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Movies is Assign to  Moderator user  successfully", "Moderator user")
        this.display = false
        this.getUserList()
      }
    })
  }
  getMovieList() {
    this.MoviesService.getMovieList().subscribe((res) => {
      this.moviesList = res
    })
  }
  markUserAsModerator(userId:string,status:boolean){
    this.ngxLoader.start();
    this.QuibService.markUserAsModerator(userId,status).subscribe(res=>{
      if(res){
        this.toastr.showSuccess(" Moderator  user is added successfully", "Moderator user")
        this.display = false
        this.getUserList()
      }
    })
  }
}
