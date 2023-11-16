import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
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
  display: boolean = false;
  MoVList: boolean = false;
  AssignToModerator: boolean = false;
  message: string;
  quibUserForm = new FormGroup({});
  columnSelectorForm = new FormGroup({});
  hoverableCells: NodeListOf<HTMLElement>;
  showPopup: boolean = false;

  userId: string;

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
      selectedMovies: new FormControl([]),
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
      { field: 'IsModerator', show: true, headers: 'IsModerator' },
      { field: 'curatorScore', show: true, headers: 'CUR' },
      { field: 'ccp', show: true, headers: 'CCP' },
      { field: 'cfp', show: true, headers: 'CFP' },
      { field: 'mov', show: true, headers: 'MOV' },
      { field: 'totalQuibsWritten', show: true, headers: 'QUIBS' },
      { field: 'averageOverallRating', show: true, headers: 'AVR' },
      { field: 'totalBumpReceived', show: true, headers: 'B-IN' },
      { field: 'bumpCount', show: true, headers: 'B-OUT' },
      { field: 'totalFlagReceived', show: true, headers: 'FLAGE' },
      { field: 'about', show: true, headers: 'PERS' },
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
    this.ngxLoader.start();
    this.display = false;
    this.quibUserForm.controls['selectedMovies'].value.map((item) => {
      return this.movieId.push(item.id);
    });
    const payload = {
      UserId: this.quibUserForm.controls['user'].value,
      movieIds: this.movieId,
    };
    this.QuibService.AssignMovieToModeratorUser(payload).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess(
          'Movies Assigned to  Moderator user  successfully',
          'Moderator user'
        );
        this.display = false;
        this.getUserList();
      }
    });
  }
  getMovieList() {
    this.MoviesService.getMovieList().subscribe((res) => {
      this.moviesList = res;
    });
  }
  markUserAsModerator(userId: string, status: boolean) {
    this.ngxLoader.start();
    this.QuibService.markUserAsModerator(userId, status).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess(
          ' Moderator  user is added successfully',
          'Moderator user'
        );
        this.display = false;
        this.getUserList();
      }
    });
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
}
