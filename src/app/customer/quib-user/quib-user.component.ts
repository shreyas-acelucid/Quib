import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MODERATOR_MOVIE_LIST,
  QUIB_USER_MOVIE_LIST,
  Quib_User,
  STYLE_VALUE,
  userSearchKeyWord,
} from 'src/app/_models/Quib_user';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Movies } from 'src/app/_models/movies';
import { MoviesService } from 'src/app/_services/movies.service';
import { CommonService } from 'src/app/_services/common';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quib-user',
  templateUrl: './quib-user.component.html',
  styleUrls: ['./quib-user.component.scss'],
  providers: [ConfirmationService],
})
export class QuibUserComponent implements OnInit {
  @ViewChild('QuibUserTable') QuibUserTable: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Quib_User: Quib_User[] = [];
  Approved_UserList: Quib_User[] = [];
  selectedMovies: Movies[] = [];
  selectedColumns: any[] = [];
  colsOptions: any[] = [];
  filteredCols: any[] = [];
  moviesList: Movies[];
  userMovieList: QUIB_USER_MOVIE_LIST[] = [];
  movieId: any[] = [];
  fgsType: any;
  SearchKeyWord: userSearchKeyWord;
  baseUrl: string = 'https://quibs.com';
  display: boolean = false;
  MoVList: boolean = false;
  AssignToModerator: boolean = false;
  message: string;
  quibUserForm = new FormGroup({});
  columnSelectorForm = new FormGroup({});
  hoverableCells: NodeListOf<HTMLElement>;
  showPopup: boolean = false;
  moderatorMovieList: MODERATOR_MOVIE_LIST[] = [];
  ModeratorMovies: boolean = false;
  pagedModeratorMovieList: any[] = [];
  currentPage = 1;
  rowsPerPage = 10;
  userId: string;
  dialogContent: string = '';
  dialogVisible: boolean = false;
  headerMessage: string = '';

  styleValue: STYLE_VALUE = {
    height: '55vw',
    width: '80vh',
  };
  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
    private router: Router,
    private CommonService: CommonService,
    private MoviesService: MoviesService,
    private confirmationService: ConfirmationService,
    private el: ElementRef
  ) {
    this.quibUserForm = this.fb.group({
      curator: ['', [Validators.required]],
      user: ['', [Validators.required]],
      selectedMovies: new FormControl([], Validators.required),
    });
    this.columnSelectorForm = this.fb.group({
      selectedColumns: new FormControl([]),
    });
  }
  // addSelectedMovie(movie: Movies) {
  //   const selectedMovies = this.quibUserForm.get('selectedMovies') as FormArray;
  //   selectedMovies.push(this.fb.control(movie));
  // }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.QuibService.SearchKeyWord.subscribe((res) => {
      this.SearchKeyWord = res;
    });
    this.getUserList();
    this.getMovieList();
    this.cols = [
      { field: 'avatar', show: true, headers: 'Avatar' },
      { field: 'displayName', show: true, headers: 'Display Name' },
      { field: 'firstName', show: true, headers: 'First Name' },
      { field: 'lastName', show: true, headers: 'Last Name' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'createdDate', show: true, headers: 'Join' },
      { field: 'isPending', show: true, headers: 'Status' },
      { field: 'mov', show: true, headers: 'T MOV' },
      { field: 'totalQuibsWritten', show: true, headers: 'T Q' },
      { field: 'unPostedQuibsCount', show: true, headers: 'UNP' },
      //{ field: 'bumpCount', show: true, headers: 'BMP' },
      { field: 'followeeCount', show: true, headers: 'FNG' },
      { field: 'followerCount', show: true, headers: 'FRS' },
      { field: 'isModerator', show: true, headers: 'IsModerator' },
      { field: 'ModeratorMovies', show: true, headers: 'M Movies' },
      { field: 'curatorScore', show: true, headers: 'CUR' },
      { field: 'ccp', show: true, headers: 'CCP' },
      { field: 'cfp', show: true, headers: 'CFP' },
      { field: 'averageOverallRating', show: true, headers: 'AVR' },
      { field: 'totalBumpReceived', show: true, headers: 'B-IN' },
      { field: 'bumpCount', show: true, headers: 'B-OU' },
      { field: 'totalFlagReceived', show: true, headers: 'FLG' },
      { field: 'about', show: true, headers: 'PERS' },
      { field: 'resetPassword', show: true, headers: 'Reset Pswd' },
      { field: 'isDeleted', show: true, headers: 'Action' },
    ];
    this.colsOptions = this.cols.map((col) => ({
      label: col.headers,
      value: col.field,
    }));

    this.hoverableCells =
      this.el.nativeElement.querySelectorAll('.hoverable-cell');
    this.hoverableCells.forEach((cell: HTMLElement) => {
      cell.addEventListener('mouseover', () => {
        this.setPopupContent(cell.textContent);

        const popup = cell.nextElementSibling as HTMLElement;
        if (popup) {
          popup.style.display = 'block';
        }
      });

      cell.addEventListener('mouseout', () => {
        const popup = cell.nextElementSibling as HTMLElement;
        if (popup) {
          popup.style.display = 'none';
        }
      });
    });
  }

  private setPopupContent(content: string) {
    const popupContent = this.el.nativeElement.querySelector('.popup-content');
    if (popupContent) {
      popupContent.textContent = content;
    }
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

  getFormattedDate(dateTime: any) {
    var date = dateTime.split('T')[0];
    return date;
  }

  getFullImageUrl(relativeUrl: string): string {
    if (relativeUrl == null) {
      return '../../assets/images/dummy_avatar.png';
    }
    return this.baseUrl + relativeUrl;
  }

  async removeMovieFromModerator(id: number, userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to remove movie from moderator user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        (await this.QuibService.removeModeratorMovie(id)).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess(
              'Moderator movie removed successfully',
              'Remove Movie'
            );
            this.getModeratorMovieList(userId);
          }
        });
      },
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  applyFilterGlobal($event, stringVal) {
    switch (($event.target as HTMLInputElement).id) {
      case 'displayName':
        this.SearchKeyWord.displayName = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibUserTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'firstName':
        this.SearchKeyWord.firstName = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibUserTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'lastName':
        this.SearchKeyWord.lastName = ($event.target as HTMLInputElement).value;
        this.QuibUserTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'email':
        this.SearchKeyWord.email = ($event.target as HTMLInputElement).value;
        this.QuibUserTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      default:
    }
  }
  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.deleteUser(userId).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess('user deleted successfully', 'user delete');
            this.getUserList();
          }
        });
      },
    });
  }

  restoreUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to restore user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.restoreUser(userId).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess(
              'user restored successfully',
              'user restore'
            );
            this.getUserList();
          }
        });
      },
    });
  }

  getUserList() {
    this.QuibService.getUserList().subscribe((data) => {
      this.Quib_User = data;
      this.Approved_UserList = data.filter((item) => item.isModerator === true);
      this.QuibUserSearch();
      this.ngxLoader.stop();
    });
  }
  changeUserStatus(Id: string, Status: boolean) {
    if (Status) {
      this.message = 'Are you sure that you want to Approved user?';
    } else {
      this.message = 'Are you sure that you want to mark as Pending?';
    }
    this.confirmationService.confirm({
      message: this.message,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.changeUserStatus(Id, Status).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess(
              ' Status change successfully',
              'Status change'
            );
            this.getUserList();
          }
        });
      },
    });
  }

  AssignMovieToModeratorUser() {
    this.quibUserForm.controls['selectedMovies'].value.map((item) => {
      return this.movieId.push(item.id);
    });
    if (this.movieId.length == 0 || !this.quibUserForm.controls['user'].value) {
      this.toastr.showWarning(
        'Please fill out all the fields before submitting the form',
        'Form incomplete'
      );
    } else {
      const payload = {
        UserId: this.quibUserForm.controls['user'].value,
        movieIds: this.movieId,
      };
      this.QuibService.AssignMovieToModeratorUser(payload).subscribe((res) => {
        this.ngxLoader.start();
        this.display = false;
        if (res) {
          this.toastr.showSuccess(
            'Movies Assigned to Moderator user successfully',
            'Moderator user'
          );
          this.display = false;
          this.movieId = [];
          this.quibUserForm.controls['user'].setValue(
            this.quibUserForm.controls['user'].value
          );
          this.getUserList();
        }
      });
    }
  }
  getMovieList() {
    this.MoviesService.getMovieList().subscribe((res) => {
      this.moviesList = res.filter((movie) => movie.isActive == true);
    });
  }
  markUserAsModerator(userId: string, status: boolean) {
    this.ngxLoader.start();
    this.QuibService.markUserAsModerator(userId, status).subscribe((res) => {
      if (res) {
        if (status) {
          this.toastr.showSuccess(
            'User is marked a moderator',
            'Moderator user'
          );
          this.display = false;
          this.getUserList();
        } else {
          this.toastr.showWarning(
            'User is unmarked as moderator',
            'Moderator user'
          );
          this.display = false;
          this.getUserList();
        }
      }
    });
  }

  fixTo4Decimals(average: any) {
    return Math.round(average * 100) / 100;
  }

  showDialog(content: string, name: string): void {
    this.dialogContent = content;
    this.dialogVisible = true;
    this.headerMessage = name;
  }

  dialogOnHide(): void {
    this.dialogVisible = false;
  }

  ngOnDestroy(): void {
    this.QuibService.SearchKeyWord.next(this.SearchKeyWord);
    this.CommonService.setUserSearchKeyWord(this.SearchKeyWord);
  }
  QuibUserSearch() {
    if (
      this.SearchKeyWord.displayName != null &&
      this.SearchKeyWord.displayName.trim().length > 0
    ) {
      this.QuibUserTable.filter(
        this.SearchKeyWord.displayName,
        'displayName',
        'contains'
      );
    }
    if (
      this.SearchKeyWord.firstName != null &&
      this.SearchKeyWord.firstName.trim().length > 0
    ) {
      this.QuibUserTable.filter(
        this.SearchKeyWord.firstName,
        'firstName',
        'contains'
      );
    }
    if (
      this.SearchKeyWord.lastName != null &&
      this.SearchKeyWord.lastName.trim().length > 0
    ) {
      this.QuibUserTable.filter(
        this.SearchKeyWord.lastName,
        'lastName',
        'contains'
      );
    }
    if (
      this.SearchKeyWord.email != null &&
      this.SearchKeyWord.email.trim().length > 0
    ) {
      this.QuibUserTable.filter(this.SearchKeyWord.email, 'email', 'contains');
    }
    if (
      this.SearchKeyWord.Gsearch != null &&
      this.SearchKeyWord.Gsearch.trim().length > 0
    ) {
      this.QuibUserTable.filterGlobal(this.SearchKeyWord.Gsearch, 'contains');
    }
  }
  FilterGlobal($event, stringVal) {
    this.SearchKeyWord.Gsearch = ($event.target as HTMLInputElement).value;
    this.QuibUserTable.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
  AdminQuib(MovieId: number) {
    this.router.navigate(['/Quib/admin-quib'], {
      queryParams: { userId: this.userId, movieId: MovieId },
    });
  }
  getUserQuibedMoviesList(userId: string) {
    this.userId = userId;
    this.QuibService.getUserQuibedMoviesList(userId).subscribe((res) => {
      this.userMovieList = res;
    });
  }

  onSelectedModeratorChange(event: any): void {
    const moderatorId = event.target.value;
    this.getModeratorMovieList(moderatorId);
    this.ModeratorMovies = true;
  }

  getModeratorMovieList(userId: string) {
    this.userId = userId;
    this.QuibService.getModeratorMovies(userId).subscribe((res) => {
      this.moderatorMovieList = res;
    });
    // const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    // const endIndex = startIndex + this.rowsPerPage;
    // this.pagedModeratorMovieList = this.moderatorMovieList.slice(
    //   startIndex,
    //   endIndex
    // );
  }

  isOptionDisabled(movie: any): boolean {
    var isDisabled: boolean = this.moderatorMovieList.some(
      (moderatorMovie) => moderatorMovie.movieId === movie.id
    );
    return isDisabled;
  }

  updatePagedModeratorMovieList(): void {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.pagedModeratorMovieList = this.moderatorMovieList.slice(
      startIndex,
      endIndex
    );
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
    this.updatePagedModeratorMovieList();
  }

  resetPassword(email: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to send a password reset link to the user?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.QuibService.resetPassword(email).subscribe((res) => {
          if (res) {
            this.toastr.showSuccess('Password reset link sent successfully', 'password reset');
          }
        });
      },
    });
  }
}
