import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  allEmails: any[];
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
    (await this.QuibService.getAllEmailTemplates()).subscribe({
      next: (response: any) => {
        this.allEmails = response;
        this.ngxLoader.stop();
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
        this.toastr.showError('Failed to fetch Emails', 'Email');
        this.ngxLoader.stop();
      },
      complete: () => {},
    });
  }

  cancelForm() {
    this.checked2 = true;
  }

  async submitForm(i: number) {
    (await this.QuibService.setEmailTemplate(this.allEmails[i])).subscribe({
      next: (response) => {
        this.toastr.showSuccess(`Email Updated`, 'Email');
        this.getForm();
      },
      error: (error) => {
        this.toastr.showError('Email failed to update', 'Email');
      },
      complete: () => {},
    });
  }
}
