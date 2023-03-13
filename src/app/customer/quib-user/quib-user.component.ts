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
  selectedMovies: Movies[];
  moviesList: Movies[]
  fgsType: any;
  display: boolean = false;
  message: string;
  ImageBase64:string |any
  quibUserForm: FormGroup
  payload:QUIB_USER
  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
    private MoviesService:MoviesService,
    private confirmationService: ConfirmationService,
  ) {
    this.quibUserForm = this.fb.group({
      Email : ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Password : ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      AvatarBase256ImagePath: ['', [Validators.required]],
      Username : ['', [Validators.required]],
      About: ['', [Validators.required]],
      IsEnabled: ['', [Validators.required]],
      status: ['', [Validators.required]],
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
      {field:'IsModerator',show:true,headers:'IsModerator'}

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
      console.log(this.Approved_UserList)
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

  OnChange(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
     this.ImageBase64 = data.target.result
    }
  }
  createNewUser() {
    this.ngxLoader.start();
    // this.payload = {
    //   Email: this.quibUserForm.controls['Email'].value,
    //   FirstName: this.quibUserForm.controls['FirstName'].value,
    //   LastName: this.quibUserForm.controls['LastName'].value,
    //   Password: this.quibUserForm.controls['Password'].value,
    //   ConfirmPassword: this.quibUserForm.controls['ConfirmPassword'].value,
    //   AvatarBase256ImagePath: this.ImageBase64,
    //   Username: this.quibUserForm.controls['Username'].value,
    //   About: this.quibUserForm.controls['About'].value,
    //   IsEnabled: false,
    // }
    this.toastr.showSuccess(" Moderator  user is added successfully", "Moderator user")
    this.getUserList()
    this.display=false
    // this.QuibService.createNewUser(this.payload).subscribe(res => {
    //   if (res) {
    //     this.toastr.showSuccess(" user created successfully", "new user")
    //     this.getUserList()
    //   }
    //   })
  }
  getMovieList() {
    this.MoviesService.getMovieList().subscribe((res) => {
      this.moviesList = res
    })
  }
}
