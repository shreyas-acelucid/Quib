import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { QuibService } from 'src/app/_services/Quib.service';
import { MoviesService } from 'src/app/_services/movies.service';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { BUMP_IN_USER_LIST, FLAG_IN_USER_LIST, QUIB_LIST, QUIB_SEARCH_WORD, SAVE_QUIBS, STYLE_VALUE } from 'src/app/_models/Quib_user';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from 'src/app/_services/common'
@Component({
  selector: 'app-recent-quib',
  templateUrl: './recent-quib.component.html',
  styleUrls: ['./recent-quib.component.scss'],
  providers: [ConfirmationService]
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
  loading: boolean 
  BumpUserList: BUMP_IN_USER_LIST[] = [];
  FlagUserList: FLAG_IN_USER_LIST[] = [];
  QuibSearchWord: QUIB_SEARCH_WORD
  headerMessage: string
  styleValue: STYLE_VALUE
  movieAndUserSelectionForm: FormGroup = new FormGroup({});
  @Input() movieTitles: any[] = [];
  @Input() filteredMovieTitles:any[] = [];
  selectedMovie: any;
  @Input() userNames: any[] = [];
  @Input() filteredUserNames: any[] = [];
  selectedUser: any;


  constructor(private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private fb: FormBuilder,
    private CommonService: CommonService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService) {
      this.movieAndUserSelectionForm = this.fb.group({
        selectedMovie: new FormControl(''),
        selectedUser: new FormControl('')
      });

  }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'expanded';
    this.QuibService.QuibSearchWord.subscribe(res => {
      this.QuibSearchWord = res
    })
    // this.getQuibList()
    // this.getMovieList()
    // this.getUserList()
    this.fetchOnLoad()
    this.cols = [
      { field: 'displayName', show: true, headers: 'User' },
      { field: 'title', show: true, headers: 'Movies' },
      { field: 'body', show: true, headers: 'Quib' },
      { field: 'time', show: true, headers: 'Time' },
      { field: 'createdDate', show: true, headers: 'Created Date' },
      { field: 'postedDate', show: true, headers: 'Posted Date' },
      { field: 'isEnabled', show: true, headers: 'IsEnabled' },
      { field: 'isBumped', show: true, headers: 'IsBumped' },
      { field: 'averageRating', show: true, headers: 'AVR' },
      { field: 'numOfRatings', show: true, headers: 'Rating' },
      { field: 'BumpIn', show: true, headers: 'B-IN' },
      { field: 'flage', show: true, headers: 'FLAG' },
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
    switch (($event.target as HTMLInputElement).id) {
      case 'displayName':
        this.QuibSearchWord.displayName = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'title':
        this.QuibSearchWord.title = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'body':
        this.QuibSearchWord.body = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'createdDate':
        this.QuibSearchWord.createdDate = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'postedDate':
        this.QuibSearchWord.postedDate = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'time':
        this.QuibSearchWord.time = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'averageRating':
        this.QuibSearchWord.averageRating = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'numOfRatings':
        this.QuibSearchWord.numOfRatings = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      default:

    }
  }

  fetchOnLoad(){
    this.getMovieList()
    this.getUserList()
  }

  async onSubmit(){
    this.selectedMovie = this.movieAndUserSelectionForm.get('selectedMovie');
    this.selectedUser = this.movieAndUserSelectionForm.get('selectedUser');
    if((this.selectedMovie==null || this.selectedMovie.value=="") && (this.selectedUser==null || this.selectedUser.value=="")){
      window.alert("Please select either a movie or a writer");
    }
    else if(this.selectedMovie == null || this.selectedMovie.value==""){
      const selectedUserId = this.selectedUser.value;
      (await this.QuibService.getAllFilteredMovies(selectedUserId)).subscribe((data : any[]) => {
        this.filteredMovieTitles = data;
      });
      await this.getFilteredQuibList(selectedUserId,null); 
    }
    else if(this.selectedUser == null || this.selectedUser.value == ""){
      const selectedMovieId = this.selectedMovie.value;
      (await this.QuibService.getAllFilteredUsers(selectedMovieId)).subscribe((data : any[]) =>{
        this.filteredUserNames = data;
      });
      await this.getFilteredQuibList(null,selectedMovieId);
    }
    else{
      const selectedMovieId = this.selectedMovie.value;
      const selectedUserId = this.selectedUser.value;
      await this.getFilteredQuibList(selectedUserId,selectedMovieId);
    }
  }

  onReset(){
    this.movieAndUserSelectionForm.reset();
    this.movieAndUserSelectionForm.get('selectedMovie').setValue('');
    this.movieAndUserSelectionForm.get('selectedUser').setValue('');
    this.filteredMovieTitles = this.movieTitles;
    this.filteredUserNames = this.userNames;
    this.quibLIst = null;
    this.selectedMovie = null;
    this.selectedMovie.value = "";
    this.selectedUser = null;
    this.selectedUser.value = "";
  }

  getMovieList(){
    this.QuibService.getAllMoviesAdminPanel().subscribe((data : any[]) => {
      this.movieTitles = data;
      this.filteredMovieTitles = this.movieTitles;
    });
  }

  getUserList(){
    this.QuibService.getAllUsersAdminPanel().subscribe((data : any[]) => {
      this.userNames = data;
      this.filteredUserNames  = this.userNames;
    });
    this.ngxLoader.stop();
  }

  // getUsersOnMovieSelection(){
  //   this.selectedMovie = this.movieAndUserSelectionForm.get('selectedMovie'); 
  //   const selectedMovieId = this.selectedMovie.value;
  //   if(this.selectedUser == null){  
  //     if(selectedMovieId){
  //       //this.ngxLoader.start();
  //       this.QuibService.getAllFilteredUsers(selectedMovieId).subscribe((data : any[]) =>{
  //         this.userNames = data;
  //       });
  //       this.getFilteredQuibList(null,selectedMovieId); 
  //     }
  //   }
  //   else{
  //     const selectedUserId = this.selectedUser.value;
  //     this.getFilteredQuibList(selectedUserId,selectedMovieId);
  //   }
  
  // }

  async getFilteredUsersOnMovieSelection(){
    this.selectedMovie = this.movieAndUserSelectionForm.get('selectedMovie');
    if(this.selectedUser == null || this.selectedUser.value == ""){ 
      const selectedMovieId = this.selectedMovie.value;
      (await this.QuibService.getAllFilteredUsers(selectedMovieId)).subscribe((data : any[]) =>{
               this.filteredUserNames = data;
        });
    }
    if(this.selectedUser.value){
      this.movieAndUserSelectionForm.get('selectedUser').setValue(this.selectedUser.value());
    }
  }

  async getFilteredMoviesOnUserSelection(){
    this.selectedUser = this.movieAndUserSelectionForm.get('selectedUser');
    if(this.selectedMovie == null || this.selectedMovie.value == ""){
    const selectedUserId = this.selectedUser.value;
    (await this.QuibService.getAllFilteredMovies(selectedUserId)).subscribe((data : any[]) => {
               this.filteredMovieTitles = data;
        });
    }
    if(this.selectedUser.value){
      this.movieAndUserSelectionForm.get('selectedMovie').setValue(this.selectedMovie.value());
    }
  }

  // getMoviesOnUserSelection(){
  //   this.selectedUser = this.movieAndUserSelectionForm.get('selectedUser');
  //   const selectedUserId = this.selectedUser.value;
  //   if(this.selectedMovie == null){
  //     if(selectedUserId){
  //         //this.ngxLoader.start();
  //         this.QuibService.getAllFilteredMovies(selectedUserId).subscribe((data : any[]) => {
  //         this.movieTitles = data;
  //       });
  //       this.getFilteredQuibList(selectedUserId,null); 
  //     }
  //   }
  //   else{
  //     const selectedMovieId = this.selectedMovie.value;
  //     this.getFilteredQuibList(selectedUserId,selectedMovieId); 
  //   }
  // }

  async getFilteredQuibList(userId,movieId){
    this.ngxLoader.start();
    await (await this.QuibService.getFilteredQuibs(userId, movieId)).subscribe((data: QUIB_LIST) => {
      this.quibLIst = data;
      this.totalRecords = data.quibTotalPages
      this.quibLIst.savedQuibs.map(item=> {
        item.createdDate=  this.CommonService.convertDate(item.createdDate);
        item.postedDate  = this.CommonService.convertDate(item.postedDate);
        item['MM'] =this.CommonService.consverIntoHHMMSS(item.time).MM
        item['HH']= this.CommonService.consverIntoHHMMSS(item.time).HH
        item['SS']=this.CommonService.consverIntoHHMMSS(item.time).SS
      })
      this.ngxLoader.stop();
      this.loading  = false;
      });
  }

  getQuibList() {
    this.QuibService.getQuibList(this.pageNo).subscribe((data: QUIB_LIST) => {
      this.quibLIst = data;
      this.totalRecords = data.quibTotalPages
      this.quibLIst.savedQuibs.map(item=> {
        item.createdDate=  this.CommonService.convertDate(item.createdDate);
        item.postedDate  = this.CommonService.convertDate(item.postedDate);
        item['MM'] =this.CommonService.consverIntoHHMMSS(item.time).MM
        item['HH']= this.CommonService.consverIntoHHMMSS(item.time).HH
        item['SS']=this.CommonService.consverIntoHHMMSS(item.time).SS
      })
      this.ngxLoader.stop();
      this.loading  = false;
      });
  }

  deleteQuib(QuibId) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete Quib ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ngxLoader.start();
        this.QuibService.deleteQuib(QuibId).subscribe(res => {
          this.toastr.showSuccess(" Quib deleted successfully", "Quib delete")
          this.getQuibList()
        })
      },
    });

  }

  IsEnabled(id: number, Status: boolean) {
    this.ngxLoader.start();
    this.QuibService.IsEnabled(id, Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.getQuibList()
      }
    })
  }

  IsBumped(id: number, Status: boolean) {
    this.ngxLoader.start();
    this.QuibService.IsBumped(id, Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.getQuibList()
      }
    })
  }
  FlagIncreamentAndDecreament(index, value) {
    this.FlagUserList[index].cfp = value
  }
  BumpIncreamentAndDecreament(index, value) {
    this.BumpUserList[index].ccp = value;
  }
  submitBumpUserListdata() {
    let payload = this.BumpUserList.map(item => {
      return {
        id: item.id,
        ccp: item.ccp
      }
    })
    this.ngxLoader.start();
    this.QuibService.submitBumpUserListdata(payload).subscribe(res => {
      if (res) {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess(" Current Curator Point is  changed successfully", "Curator Point")
        this.getQuibList()
      } else {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess("Somthing is Wrong,Please check ", "Curator  Score")
        this.getQuibList()
      }
    })
  }
  submitFlagUserListdata() {
    let payload = this.FlagUserList.map(item => {
      return {
        id: item.id,
        cfp: item.cfp
      }
    })
    this.ngxLoader.start();
    this.QuibService.submitFlagUserListdata(payload).subscribe(res => {
      if (res) {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess(" Current Flagger Point is  changed successfully", "Flagger Point")
        this.getQuibList()
      } else {
        this.display = false;
        this.BIN = false;
        this.toastr.showSuccess("Somthing is Wrong,Please check ", "Flagger Point")
        this.getQuibList()
      }
    })
  }
  getBumpUserListByQuibId(id: number) {
    this.headerMessage = "Bumped User List"
    this.ngxLoader.start();
    this.QuibService.getBumpUserListByQuibId(id).subscribe(res => {
      this.BumpUserList = res;
      this.display = true;
      this.BIN = true;
      this.ngxLoader.stop();
      if (this.BumpUserList.length === 0) {
        this.styleValue.height = "20vh",
          this.styleValue.width = "55vw"
      } else {
        this.styleValue.height = "90vh",
          this.styleValue.width = "55vw"
      }
    })
  }
  getFlageUserListByQuibId(id: number) {
    this.headerMessage = "Flagged User List"
    this.QuibService.getFlageUserListByQuibId(id).subscribe(res => {
      this.FlagUserList = res;
      this.display = true;
      this.BIN = false;
      if (this.FlagUserList.length === 0) {
        this.styleValue.height = "20vh",
          this.styleValue.width = "55vw"
      } else {
        this.styleValue.height = "90vh",
          this.styleValue.width = "55vw"
      }
      this.ngxLoader.stop();
    })
  }
  FilterGlobal($event, stringVal) {
    this.QuibSearchWord.Gseacrh = ($event.target as HTMLInputElement).value;
    this.QuibTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  ngOnDestroy(): void {
    this.QuibService.QuibSearchWord.next(this.QuibSearchWord);
    this.CommonService.setQuibSearchWord(this.QuibSearchWord);
  }

  QuibSearch() {
    if (this.QuibSearchWord.Gseacrh != null && this.QuibSearchWord.Gseacrh.trim().length > 0) {
      this.QuibTable.filterGlobal(this.QuibSearchWord.Gseacrh, "contains")
    }
    if (this.QuibSearchWord.displayName != null && this.QuibSearchWord.displayName.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.displayName, "displayName", "contains")
    }
    if (this.QuibSearchWord.title != null && this.QuibSearchWord.title.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.title, "title", "contains")
    }
    if (this.QuibSearchWord.body != null && this.QuibSearchWord.body.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.body, "body", "contains")
    }
    if (this.QuibSearchWord.createdDate != null && this.QuibSearchWord.createdDate.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.createdDate, "createdDate", "contains")
    }
    if (this.QuibSearchWord.postedDate != null && this.QuibSearchWord.postedDate.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.postedDate, "postedDate", "contains")
    }
    if (this.QuibSearchWord.averageRating != null && this.QuibSearchWord.averageRating.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.averageRating, "averageRating", "contains")
    }
    if (this.QuibSearchWord.time != null && this.QuibSearchWord.time.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.time, "time", "contains")
    }
    if (this.QuibSearchWord.numOfRatings != null && this.QuibSearchWord.numOfRatings.trim().length > 0) {
      this.QuibTable.filter(this.QuibSearchWord.numOfRatings, "numOfRatings", "contains")
    }
  }
  loadNextQuibsdata(event) {
    this.loading = true;
    this.pageNo = (event.first + event.rows) / 20;
    this.QuibService.getQuibList(this.pageNo).subscribe((data: QUIB_LIST) => {
      this.quibLIst = data;
      this.totalRecords = data.quibTotalPages
      this.loading = false;
    });
  }
  //[lazy]="true"(onPage)="loadNextQuibsdata($event)" , add these two point for lazy loading 
}
