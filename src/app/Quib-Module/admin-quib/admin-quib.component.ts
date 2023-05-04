import { Component, OnInit, ViewChild } from '@angular/core';
import { Quib } from 'src/app/_models/Quib_user';
import { QuibService } from 'src/app/_services/Quib.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

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
  Admin_Quib: Quib[] = [];
  fgsType: any;

  constructor(
    private QuibService: QuibService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
     this.AdminQuibList()
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
 
  AdminQuibList() {
    let payload;
    this.QuibService.adminQuib.subscribe(res=>{
      payload= res;
    })
    this.QuibService.AdminQuibList(payload).subscribe((data) => {
      this.ngxLoader.stop();
    });
  }
  IsEnabled(id:number,Status:boolean){
    this.ngxLoader.start();
    this.QuibService.IsEnabled(id,Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.AdminQuibList()
      }
    })
  }

  IsBumped(id:number,Status:boolean){
    this.ngxLoader.start();
    this.QuibService.IsBumped(id,Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.AdminQuibList()
      }
    })
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
          this.AdminQuibList()
        })
      },
    });
    
  }
}
