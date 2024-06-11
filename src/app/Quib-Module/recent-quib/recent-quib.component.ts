import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { QuibService } from 'src/app/_services/Quib.service';
import { MoviesService } from 'src/app/_services/movies.service';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import {
  BUMP_IN_USER_LIST,
  FLAG_IN_USER_LIST,
  QUIB_LIST,
  QUIB_SEARCH_WORD,
  SAVE_QUIBS,
  STYLE_VALUE,
} from 'src/app/_models/Quib_user';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from 'src/app/_services/common';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { error } from 'console';
//import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-recent-quib',
  templateUrl: './recent-quib.component.html',
  styleUrls: ['./recent-quib.component.scss'],
  providers: [ConfirmationService],
})
export class RecentQuibComponent implements OnInit {
  @ViewChild('QuibTable') QuibTable: Table | undefined;
  sidebarSpacing: any;
  fgsType: any;
  cols: TABLE_HEADING[];
  display: boolean = false;
  quibLIst: QUIB_LIST;
  newQuibList: any[] = [];
  BIN: boolean = false;
  CCP: number = 0;
  totalRecords: number;
  pageNo: number = 100;
  loading: boolean;
  BumpUserList: BUMP_IN_USER_LIST[] = [];
  FlagUserList: FLAG_IN_USER_LIST[] = [];
  QuibSearchWord: QUIB_SEARCH_WORD;
  headerMessage: string;
  styleValue: STYLE_VALUE;
  movieAndUserSelectionForm: FormGroup = new FormGroup({});
  @Input() movieTitles: any[] = [];
  @Input() filteredMovieTitles: any[] = [];
  selectedMovie: any;
  @Input() userNames: any[] = [];
  @Input() filteredUserNames: any[] = [];
  selectedUser: any;
  filterDirectionTowardsUser: boolean = false;
  filterDirectionTowardsMovie: boolean = false;
  columnSelectorForm = new FormGroup({});
  colsOptions: any[] = [];
  selectedColumns: any[] = [];
  filteredCols: any[] = [];
  multiSelectStyle = {
    width: '12.5rem',
  };
  filterValue = '';
  editDialogueHeaderMessage: string = '';
  displayEditDialog: boolean = false;
  editTextPopup: boolean = false;
  editedText: string = '';
  editedTimer: string = '';
  editedTimerSeconds: number = 0;
  currentQuibIndex: number = 0;
  isTextChanged: boolean = false;
  ratingPopup: boolean = false;
  userRatingList: any[] = [];
  displayRatingPopup: boolean = false;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private fb: FormBuilder,
    private CommonService: CommonService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService
  ) {
    this.movieAndUserSelectionForm = this.fb.group({
      selectedMovie: new FormControl(''),
      selectedUser: new FormControl(''),
    });
    this.columnSelectorForm = this.fb.group({
      selectedColumns: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.sidebarSpacing = 'expanded';
    this.QuibService.QuibSearchWord.subscribe((res) => {
      this.QuibSearchWord = res;
    });
    // this.getQuibList()
    // this.getMovieList()
    // this.getUserList()
    this.fetchOnLoad();
    this.cols = [
      { field: 'displayName', show: true, headers: 'User' },
      { field: 'title', show: true, headers: 'Movie' },
      { field: 'body', show: true, headers: 'Quib' },
      { field: 'time', show: true, headers: 'Time' },
      { field: 'createdDate', show: true, headers: 'Created' },
      { field: 'postedDate', show: true, headers: 'Posted' },
      // { field: 'isEnabled', show: true, headers: 'IsEnabled' },
      //{ field: 'isBumped', show: true, headers: 'IsBumped' },
      { field: 'averageRating', show: true, headers: 'AVR' },
      { field: 'numOfRatings', show: true, headers: '#RT' },
      { field: 'bIn', show: true, headers: 'B-IN' },
      { field: 'bIn', show: true, headers: 'FLAG' },
    ];
    this.colsOptions = this.cols.map((col) => ({
      label: col.headers,
      value: col.field,
    }));
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
        this.QuibSearchWord.displayName = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'title':
        this.QuibSearchWord.title = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'body':
        this.QuibSearchWord.body = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'createdDate':
        this.QuibSearchWord.createdDate = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'postedDate':
        this.QuibSearchWord.postedDate = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'time':
        this.QuibSearchWord.time = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'averageRating':
        this.QuibSearchWord.averageRating = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      case 'numOfRatings':
        this.QuibSearchWord.numOfRatings = (
          $event.target as HTMLInputElement
        ).value;
        this.QuibTable.filter(
          ($event.target as HTMLInputElement).value,
          ($event.target as HTMLInputElement).id,
          stringVal
        );
        break;
      default:
    }
  }

  myResetFunction(options: any) {
    options.reset();
    this.filterValue = '';
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

  fetchOnLoad() {
    this.getMovieList();
    this.getUserList();
  }

  fixTo4Decimals(average: any) {
    return Math.round(average * 100) / 100;
  }

  async onSubmit() {
    this.selectedMovie = this.movieAndUserSelectionForm.get('selectedMovie');
    this.selectedUser = this.movieAndUserSelectionForm.get('selectedUser');
    if (
      (this.selectedMovie == null || this.selectedMovie.value == '') &&
      (this.selectedUser == null || this.selectedUser.value == '')
    ) {
      this.toastr.showWarning(
        'Please select either a Movie or a User',
        'Select'
      );
    } else if (this.selectedMovie == null || this.selectedMovie.value == '') {
      const selectedUserId = this.selectedUser.value;
      (await this.QuibService.getAllFilteredMovies(selectedUserId)).subscribe(
        (data: any[]) => {
          this.filteredMovieTitles = data;
        }
      );
      await this.getFilteredQuibList(selectedUserId, null);
    } else if (this.selectedUser == null || this.selectedUser.value == '') {
      const selectedMovieId = this.selectedMovie.value;
      (await this.QuibService.getAllFilteredUsers(selectedMovieId)).subscribe(
        (data: any[]) => {
          this.filteredUserNames = data;
        }
      );
      await this.getFilteredQuibList(null, selectedMovieId);
    } else {
      const selectedMovieId = this.selectedMovie.value;
      const selectedUserId = this.selectedUser.value;
      await this.getFilteredQuibList(selectedUserId, selectedMovieId);
    }
  }

  onReset() {
    this.movieAndUserSelectionForm.reset();
    this.movieAndUserSelectionForm.get('selectedMovie').setValue('');
    this.movieAndUserSelectionForm.get('selectedUser').setValue('');
    this.filteredMovieTitles = this.movieTitles;
    this.filteredUserNames = this.userNames;
    this.quibLIst = null;
    this.selectedMovie = null;
    //this.selectedMovie.value = '';
    this.selectedUser = null;
    //this.selectedUser.value = '';
    this.filterDirectionTowardsMovie = false;
    this.filterDirectionTowardsUser = false;
  }

  getMovieList() {
    this.QuibService.getAllMoviesAdminPanel().subscribe((data: any[]) => {
      this.movieTitles = data;
      this.filteredMovieTitles = this.movieTitles;
    });
  }

  getUserList() {
    this.QuibService.getAllUsersAdminPanel().subscribe((data: any[]) => {
      this.userNames = data;
      this.filteredUserNames = this.userNames;
    });
    this.ngxLoader.stop();
  }

  filterMovieTitles(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredMovieTitles = this.filteredMovieTitles.filter((movie) => {
      movie.title.toLowerCase.includes(searchText);
    });
  }

  async getFilteredUsersOnMovieSelection() {
    this.movieAndUserSelectionForm.updateValueAndValidity();
    this.selectedMovie =
      this.movieAndUserSelectionForm.controls['selectedMovie'];

    if (
      this.selectedMovie.value == null ||
      this.selectedMovie.value === 'null'
    ) {
      this.selectedMovie.setValue('');
      this.selectedMovie = null;
    } else {
      if (
        !this.filterDirectionTowardsUser &&
        !this.filterDirectionTowardsMovie
      ) {
        this.filterDirectionTowardsUser = true;
      }
      if (
        this.filterDirectionTowardsUser &&
        !this.filterDirectionTowardsMovie
      ) {
        const selectedMovieId = this.selectedMovie.value;
        (await this.QuibService.getAllFilteredUsers(selectedMovieId)).subscribe(
          (data: any[]) => {
            this.filteredUserNames = data;
          }
        );

        this.selectedUser.setValue('');
      } else if (
        !this.filterDirectionTowardsMovie &&
        !this.filterDirectionTowardsUser
      ) {
        this.toastr.showWarning(
          'Please reset and start filtering again',
          'reset'
        );
      }
    }
  }

  async getFilteredMoviesOnUserSelection() {
    this.selectedUser = this.movieAndUserSelectionForm.get('selectedUser');
    if (this.selectedUser.value == null || this.selectedUser.value === 'null') {
      this.selectedUser.setValue('');
      this.selectedUser = null;
    } else {
      if (
        !this.filterDirectionTowardsMovie &&
        !this.filterDirectionTowardsUser
      ) {
        this.filterDirectionTowardsMovie = true;
      }
      if (
        this.filterDirectionTowardsMovie &&
        !this.filterDirectionTowardsUser
      ) {
        const selectedUserId = this.selectedUser.value;
        (await this.QuibService.getAllFilteredMovies(selectedUserId)).subscribe(
          (data: any[]) => {
            this.filteredMovieTitles = data;
          }
        );

        this.selectedMovie.setValue('');
      } else if (
        !this.filterDirectionTowardsMovie &&
        !this.filterDirectionTowardsUser
      ) {
        this.toastr.showWarning(
          'Please reset and start filtering again',
          'Reset'
        );
      }
    }
  }

  getTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = this.padZero(hours);
    const formattedMinutes = this.padZero(minutes);
    const formattedSeconds = this.padZero(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  EditQuib(Quib): void {
    this.editedText = Quib.body;
    this.editedTimerSeconds = Quib.time;
    this.editedTimer = this.getTime(this.editedTimerSeconds);
    this.displayEditDialog = true;
    this.editTextPopup = true;
    this.currentQuibIndex = this.quibLIst.savedQuibs.indexOf(Quib);
    this.editDialogueHeaderMessage = 'Edit Quib';
  }

  async submitEdit(editedQuib: string) {
    const Quib = this.quibLIst.savedQuibs[this.currentQuibIndex];
    const finalTime = this.convertTimeToSeconds(this.editedTimer);
    const payload = new FormData();
    payload.append('Id', Quib.id);
    payload.append('Body', editedQuib);
    payload.append('Time', `${finalTime}`);
    payload.append('IsEnabled', Quib.isEnabled as any);
    payload.append('IsPosted', Quib.isPosted as any);

    (await this.QuibService.editDialogue(payload)).subscribe({
      next: (response) => {
        this.onSubmit();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
    this.closeEditDialog();
  }

  closeEditDialog() {
    this.isTextChanged = false;
    this.displayEditDialog = false;
  }

  editTimer(direction: boolean) {
    this.isTextChanged = true;
    if (direction) {
      this.editedTimerSeconds += 1;
      this.editedTimer = this.getTime(this.editedTimerSeconds);
    } else {
      if (this.editedTimerSeconds > 0) {
        this.editedTimerSeconds -= 1;
        this.editedTimer = this.getTime(this.editedTimerSeconds);
      }
    }
  }

  onTextChange(newValue: string) {
    this.isTextChanged = newValue !== '';
  }

  private convertTimeToSeconds(time: string): number {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  async getFilteredQuibList(userId, movieId) {
    this.ngxLoader.start();
    (await this.QuibService.getFilteredQuibs(userId, movieId)).subscribe(
      (data: QUIB_LIST) => {
        this.quibLIst = data;
        this.totalRecords = data.quibTotalPages;
        this.quibLIst.savedQuibs.map((item) => {
          item.createdDate = this.CommonService.convertDate(item.createdDate);
          item.postedDate = item.postedDate
            ? this.CommonService.convertDate(item.postedDate)
            : '00:00:00';
          item['MM'] = this.CommonService.consverIntoHHMMSS(item.time).MM;
          item['HH'] = this.CommonService.consverIntoHHMMSS(item.time).HH;
          item['SS'] = this.CommonService.consverIntoHHMMSS(item.time).SS;
        });
        this.ngxLoader.stop();
        this.loading = false;
        this.QuibTable.first = 0;
      }
    );
  }

  getQuibList() {
    this.QuibService.getQuibList(this.pageNo).subscribe((data: QUIB_LIST) => {
      this.quibLIst = data;
      this.totalRecords = data.quibTotalPages;
      this.quibLIst.savedQuibs.map((item) => {
        item.createdDate = this.CommonService.convertDate(item.createdDate);
        item.postedDate = this.CommonService.convertDate(item.postedDate);
        item['MM'] = this.CommonService.consverIntoHHMMSS(item.time).MM;
        item['HH'] = this.CommonService.consverIntoHHMMSS(item.time).HH;
        item['SS'] = this.CommonService.consverIntoHHMMSS(item.time).SS;
      });
      this.ngxLoader.stop();
      this.loading = false;
    });
  }

  deleteQuib(QuibId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete Quib ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.deleteQuib(QuibId).subscribe({
          next: (res) => {
            this.toastr.showSuccess(
              ' Quib deleted successfully',
              'Quib delete'
            );
            this.onSubmit();
          },
          error: (error) => {
            this.toastr.showError('Error deleting the Quib', 'Quib delete');
            this.onSubmit();
          },
        });
      },
    });
  }

  restoreQuib(QuibId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to restore Quib ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.restoreQuib(QuibId).subscribe({
          next: (res) => {
            this.toastr.showSuccess(
              'Quib restored successfully',
              'Quib restore'
            );
            this.onSubmit();
          },
          error: (error) => {
            this.toastr.showError('Error restoring the Quib', 'Quib restore');
            this.onSubmit();
          },
        });
      },
    });
  }

  IsEnabled(id: number, Status: boolean) {
    this.ngxLoader.start();
    this.QuibService.IsEnabled(id, Status).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess(' Status change successfully', 'Status change');
        this.getQuibList();
      }
    });
  }

  IsBumped(id: number, Status: boolean) {
    this.ngxLoader.start();
    this.QuibService.IsBumped(id, Status).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess(' Status change successfully', 'Status change');
        this.getQuibList();
      }
    });
  }
  FlagIncreamentAndDecreament(index, value) {
    if(1<=value && value<=5)
    this.FlagUserList[index].cfp = value;
  }
  BumpIncreamentAndDecreament(index, value) {
    if(1<=value && value<=5)
    this.BumpUserList[index].ccp = value;
  }
  submitBumpUserListdata() {
    let payload = this.BumpUserList.map((item) => {
      return {
        id: item.id,
        ccp: item.ccp,
      };
    });
    this.ngxLoader.start();
    this.QuibService.submitBumpUserListdata(payload).subscribe({
      next: (res) => {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess(
          'Current Curator Point is  changed successfully',
          'Curator Point'
        ),
          this.onSubmit();
      },
      error: (error) => {
        this.display = false;
        this.BIN = false;
        this.toastr.showError(
          'Something is Wrong,Please check ',
          'Curator  Score'
        );
        this.getQuibList();
      },
    });
  }
  submitFlagUserListdata() {
    let payload = this.FlagUserList.map((item) => {
      return {
        id: item.id,
        cfp: item.cfp,
      };
    });
    this.ngxLoader.start();
    this.QuibService.submitFlagUserListdata(payload).subscribe({
      next: (res) => {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess(
          'Current Flag Score is successfully changed',
          'Flag Score'
        );
        this.onSubmit();
      },
      error: (error) => {
        this.display = false;
        this.BIN = false;
        this.toastr.showError(
          'Something is Wrong,Please check ',
          'Flag  Score'
        );
        this.getQuibList();
      },
    });
  }
  getBumpUserListByQuibId(id: number) {
    this.headerMessage = 'Bumped User List';

    this.QuibService.getBumpUserListByQuibId(id).subscribe({
      next: (res) => {
        this.BumpUserList = res;
        this.display = true;
        this.BIN = true;
        this.ratingPopup = false;

        if (this.BumpUserList.length === 0) {
          (this.styleValue.height = '20vh'), (this.styleValue.width = '55vw');
        } else {
          (this.styleValue.height = '90vh'), (this.styleValue.width = '55vw');
        }
      },
      error: (error) => {
        this.toastr.showError(
          'Something is Wrong,Please check ',
          'Bumped user list'
        );
      },
      complete: () => {},
    });
  }
  getFlageUserListByQuibId(id: number) {
    this.headerMessage = 'Flagged User List';
    this.QuibService.getFlageUserListByQuibId(id).subscribe({
      next: (res) => {
        this.FlagUserList = res;
        this.display = true;
        this.BIN = false;
        if (this.FlagUserList.length === 0) {
          (this.styleValue.height = '20vh'), (this.styleValue.width = '55vw');
        } else {
          (this.styleValue.height = '90vh'), (this.styleValue.width = '55vw');
        }
        this.ngxLoader.stop();
      },
      error: (error) => {
        this.ngxLoader.stop();
        this.toastr.showError(
          'Something is Wrong,Please check ',
          'Flagged user list'
        );
      },
    });
  }

  getRatingsOfQuibById(id: number) {
    this.headerMessage = 'Users who rated';
    this.QuibService.getRatingsOfQuibById(id).subscribe({
      next: (res: any[]) => {
        this.userRatingList = res;
        this.ratingPopup = true;
        this.displayRatingPopup = true;
        this.BIN = false;
      },
      error: (res) => {
        this.toastr.showError(
          'Something is Wrong, Please check',
          'Users who rated'
        );
      },
      complete: () => {},
    });
  }
  FilterGlobal($event, stringVal) {
    this.QuibSearchWord.Gseacrh = ($event.target as HTMLInputElement).value;
    this.QuibTable.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
  ngOnDestroy(): void {
    this.QuibService.QuibSearchWord.next(this.QuibSearchWord);
    this.CommonService.setQuibSearchWord(this.QuibSearchWord);
  }

  QuibSearch() {
    if (
      this.QuibSearchWord.Gseacrh != null &&
      this.QuibSearchWord.Gseacrh.trim().length > 0
    ) {
      this.QuibTable.filterGlobal(this.QuibSearchWord.Gseacrh, 'contains');
    }
    if (
      this.QuibSearchWord.displayName != null &&
      this.QuibSearchWord.displayName.trim().length > 0
    ) {
      this.QuibTable.filter(
        this.QuibSearchWord.displayName,
        'displayName',
        'contains'
      );
    }
    if (
      this.QuibSearchWord.title != null &&
      this.QuibSearchWord.title.trim().length > 0
    ) {
      this.QuibTable.filter(this.QuibSearchWord.title, 'title', 'contains');
    }
    if (
      this.QuibSearchWord.body != null &&
      this.QuibSearchWord.body.trim().length > 0
    ) {
      this.QuibTable.filter(this.QuibSearchWord.body, 'body', 'contains');
    }
    if (
      this.QuibSearchWord.createdDate != null &&
      this.QuibSearchWord.createdDate.trim().length > 0
    ) {
      this.QuibTable.filter(
        this.QuibSearchWord.createdDate,
        'createdDate',
        'contains'
      );
    }
    if (
      this.QuibSearchWord.postedDate != null &&
      this.QuibSearchWord.postedDate.trim().length > 0
    ) {
      this.QuibTable.filter(
        this.QuibSearchWord.postedDate,
        'postedDate',
        'contains'
      );
    }
    if (
      this.QuibSearchWord.averageRating != null &&
      this.QuibSearchWord.averageRating.trim().length > 0
    ) {
      this.QuibTable.filter(
        this.QuibSearchWord.averageRating,
        'averageRating',
        'contains'
      );
    }
    if (
      this.QuibSearchWord.time != null &&
      this.QuibSearchWord.time.trim().length > 0
    ) {
      this.QuibTable.filter(this.QuibSearchWord.time, 'time', 'contains');
    }
    if (
      this.QuibSearchWord.numOfRatings != null &&
      this.QuibSearchWord.numOfRatings.trim().length > 0
    ) {
      this.QuibTable.filter(
        this.QuibSearchWord.numOfRatings,
        'numOfRatings',
        'contains'
      );
    }
  }
  loadNextQuibsdata(event) {
    this.loading = true;
    this.pageNo = (event.first + event.rows) / 20;
    this.QuibService.getQuibList(this.pageNo).subscribe((data: QUIB_LIST) => {
      this.quibLIst = data;
      this.totalRecords = data.quibTotalPages;
      this.loading = false;
    });
  }
  //[lazy]="true"(onPage)="loadNextQuibsdata($event)" , add these two point for lazy loading
}
