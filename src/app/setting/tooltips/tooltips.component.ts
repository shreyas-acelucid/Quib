import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';

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
  checked2: boolean;
  color: ThemePalette = 'primary';
  disabled: boolean = false;
  checked: boolean = true;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
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
    this.GetTooltipDisplay();
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

  async onSubmit() {
    (
      await this.QuibService.EditTooltip(
        this.TooltipsForm.controls['buttonId'].value,
        this.TooltipsForm.controls['tooltipText'].value,
        this.TooltipsForm.controls['buttonName'].value
      )
    ).subscribe({
      next: (response) => {
        this.toastr.showSuccess(`Tooltip Updated`, 'TOS');
      },
      error: (error) => {
        this.toastr.showError('Tooltip failed to update', 'TOS');
      },
      complete: () => {
        this.getTooltips();
        this.display = false;
      },
    });
  }
  EditToolTips(tooltips) {
    this.display = true;
    this.TooltipsForm.get('buttonName').setValue(tooltips.buttonName);
    this.TooltipsForm.get('tooltipText').setValue(tooltips.tooltipText);
    this.TooltipsForm.get('buttonId').setValue(tooltips.buttonId);
  }

  GetTooltipDisplay() {
    this.QuibService.GetTooltipDisplay().subscribe((res: any) => {
      this.checked2 = res.isVisible;
    });
  }

  DisplayAllTooltips() {
    var status = this.checked2;
    this.QuibService.DisplayTooltips(status).subscribe((res) => {
      this.GetTooltipDisplay();
      this.toastr.showSuccess(
        'Tooltip status changed successfully',
        'Tooltips'
      );
    });
  }

  async EditTooltipDisplay(buttonid, event: MatSlideToggleChange) {
    const checked: boolean = event.checked;
    await this.QuibService.EditTooltipDisplay(buttonid, !checked).subscribe({
      next: (response) => {
        console.log(response);
        if (checked) {
          this.toastr.showSuccess('Tooltip enabled', 'Tooltip');
        } else {
          this.toastr.showWarning('Tooltip disabled', 'Tooltip');
        }
      },
      error: (error) => {
        console.log(error);
        this.toastr.showError('There was a problem updating tooltip display','Error')
      },
      complete: () => {},
    });
  }
}
