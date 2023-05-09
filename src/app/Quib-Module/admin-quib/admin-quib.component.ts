import { Component, OnInit, ViewChild } from '@angular/core';
import { ADMIN_QUIB, QUIB_BY_USERID_MOVIE_ID, Quib } from 'src/app/_models/Quib_user';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-quib',
  templateUrl: './admin-quib.component.html',
  styleUrls: ['./admin-quib.component.scss'],
  providers: [ConfirmationService]
})
export class AdminQuibComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Admin_Quib: ADMIN_QUIB;
  fgsType: any;
  payload:QUIB_BY_USERID_MOVIE_ID

  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private ActivatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    ) { 
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.ActivatedRoute.queryParams.subscribe((res: QUIB_BY_USERID_MOVIE_ID) => {
      this.payload = res
    })
   this.AdminQuibList(this.payload)
    this.cols = [
      { field: 'user', show: true, headers: 'User' },
      { field: 'movies', show: true, headers: 'Movies'},
      { field: 'quib', show: true, headers: 'Quib' },
      { field: 'time', show: true, headers: 'Time' },
      { field: 'createdDate', show: true, headers: 'Created Date' },
      { field: 'postedDate', show: true, headers: 'Posted Date' },
      { field: 'isEnabled', show: true, headers: 'Is Enabled' },
      { field: 'isBumped', show: true, headers: 'Is Bumped' },
      { field: 'quibType', show: true, headers: 'Quib Type' },
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
 AdminQuibList(payload) {
    this.QuibService.AdminQuibList(payload).subscribe((data) => {
      this.Admin_Quib = data
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
          this.AdminQuibList(this.payload)
        })
      },
    });
    
  }
}
