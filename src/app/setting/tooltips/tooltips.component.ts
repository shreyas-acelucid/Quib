import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
  providers: [ConfirmationService],
})
export class TooltipsComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  allTooltips: any[] = [];
  disable: false;
  tooltip: any;
  TooltipsForm: FormGroup;
  display: boolean = false;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
  ) {
    this.TooltipsForm = this.fb.group({
      buttonId: ['', [Validators.required]],
      buttonName: ['', [Validators.required]],
      tooltipText: ['', [Validators.required]],
    });
  }

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
      complete: () => { },
    });
  }

  async onSubmit() {
    (await this.QuibService.EditTooltip(this.TooltipsForm.controls['buttonId'].value,
      this.TooltipsForm.controls['tooltipText'].value, this.TooltipsForm.controls['buttonName'].value)).subscribe({
        next: (response) => {
          this.toastr.showSuccess(`Tooltip Updated`, 'TOS');
        },
        error: (error) => {
          this.toastr.showError('Tooltip failed to update', 'TOS');
        },
        complete: () => {
          this.getTooltips();
          this.display = false
        },
      });
  }
  EditToolTips(tooltips) {
    this.display = true
    this.TooltipsForm.get("buttonName").setValue(tooltips.buttonName)
    this.TooltipsForm.get("tooltipText").setValue(tooltips.tooltipText)
    this.TooltipsForm.get("buttonId").setValue(tooltips.buttonId)
  }
}
