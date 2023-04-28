import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { QuibService } from 'src/app/_services/Quib.service';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { QUIB_SEARCH_WORD, Quib } from 'src/app/_models/Quib_user';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import {CommonService} from 'src/app/_services/common'
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
  quibLIst: Quib[] = [];
  BIN: boolean = false;
  CCP: number = 0;
  BumpUserList:any =[];
  FlageUserList:any =[];
  QuibSearchWord:QUIB_SEARCH_WORD

  constructor(private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private fb: FormBuilder,
    private CommonService:CommonService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrMsgService) {

  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
   this.cols = [
      { field: 'displayName', show: true, headers: 'User' },
      { field: 'title', show: true, headers: 'Movies' },
      { field: 'body', show: true, headers: 'Quib' },
      { field: 'time', show: true, headers: 'Time' },
      { field: 'createdDate', show: true, headers: 'Created Date' },
      { field: 'postedDate', show: true, headers: 'Posted Date' },
      { field: 'isEnabled', show: true, headers: 'IsEnabled' },
      { field: 'isBumped', show: true, headers: 'IsBumped' },
      { field: 'avr', show: true, headers: 'AVR' },
      { field: 'rating', show: true, headers: 'Rating' },
      { field: 'BumpIn', show: true, headers: 'B-IN' },
      { field: 'flage', show: true, headers: 'FLAG' },
    ]
    this.QuibService.QuibSearchWord.subscribe(res => {
      this.QuibSearchWord = res
    })
    this.getQuibList()
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
      case 'avr':
        this.QuibSearchWord.avr = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      case 'rating':
        this.QuibSearchWord.rating = ($event.target as HTMLInputElement).value;
        this.QuibTable.filter(($event.target as HTMLInputElement).value, ($event.target as HTMLInputElement).id, stringVal);
        break;
      default:

    }
  }
  getQuibList() {
    this.QuibService.getQuibList().subscribe((data: any) => {
      this.quibLIst = data.savedQuibs;
      this.ngxLoader.stop();
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
  Increament() {
    this.CCP++;
  }
  Decrement(index) {
    console.log(this.BumpUserList[index])
    this.CCP--;
  }

  getBumpUserListByQuibId() {
    this.ngxLoader.start();
    this.QuibService.getBumpUserListByQuibId().subscribe(res => {
      this.BumpUserList =  res;
      this.display = true;
      this.BIN = true;
      this.ngxLoader.stop();
    })
  }
  getFlageUserListByQuibId(){
    this.QuibService.getFlageUserListByQuibId().subscribe(res=>{
      this.FlageUserList = res;
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
}
