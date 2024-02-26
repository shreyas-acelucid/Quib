import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
})
export class TooltipsComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  allTooltips: any[] = [];
  disable: false;
  tooltip: any;
  closable: any;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService
  ) {}

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.getTooltips();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  async getTooltips() {
    this.ngxLoader.start();
    (await this.QuibService.GetTooltips()).subscribe({
      next: (response: any[]) => {
        this.allTooltips = response;
        this.ngxLoader.stop();
      },
      error: (error) => {
        this.ngxLoader.stop();
      },
      complete: () => {},
    });
  }

  async onSubmit(buttonid, tooltiptext) {
    (await this.QuibService.EditTooltip(buttonid, tooltiptext)).subscribe({
      next: (response) => {
        this.toastr.showSuccess(`Tooltip Updated`, 'TOS');
      },
      error: (error) => {
        this.toastr.showError('Tooltip failed to update', 'TOS');
      },
      complete: () => {
        this.checked2 = true;
        this.ngOnInit();
      },
    });
  }
}
