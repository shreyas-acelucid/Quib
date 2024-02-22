import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.scss'],
})
export class TOSComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  tos: any;
  disable: false;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService
  ) {}

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.getForm();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  async getForm() {
    this.ngxLoader.start();
    (await this.QuibService.GetTos()).subscribe({
      next: (response: any) => {
        this.tos = JSON.parse(response.tosText).TOSText;
        console.log('Fetched Succesfully');
        this.ngxLoader.stop();
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
        this.toastr.showError('Failed to fetch TOS', 'TOS');
        this.ngxLoader.stop();
      },
      complete: () => {},
    });
  }

  cancelForm() {
    this.checked2 = true;
    this.ngOnInit();
  }

  async submitForm() {
    (await this.QuibService.EditTos(this.tos)).subscribe({
      next: (response) => {
        this.toastr.showSuccess(`TOS Updated`, 'TOS');
      },
      error: (error) => {
        this.toastr.showError('TOS failed to update', 'TOS');
      },
      complete: () => {
        this.cancelForm();
      },
    });
  }
}
