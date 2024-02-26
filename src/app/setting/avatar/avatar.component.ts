import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ConfirmationService } from 'primeng/api';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  allAvatars: any[] = [];
  AvatarId: number;
  serverBaseUrl: string = 'http://44.211.90.48/';
  image: File;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.getAvatar();
  }

  confirmdelete(event: Event, AvatarId: number) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Confirm Deletion of Avatar?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteAvatar(AvatarId);
      },
      reject: () => {},
    });
  }

  async getAvatar() {
    this.ngxLoader.start();
    (await this.QuibService.getAvatar()).subscribe({
      next: (response: any[]) => {
        this.allAvatars = response;
        this.toastr.showSuccess('All Avatars fetched successfully', 'Avatars');
        this.ngxLoader.stop();
      },
      error: (error) => {
        this.ngxLoader.stop();
      },
      complete: () => {},
    });
  }

  getFullImageUrl(relativeUrl: string): string {
    return this.serverBaseUrl + relativeUrl;
  }

  async deleteAvatar(AvatarId: number) {
    (await this.QuibService.deleteAvatar(AvatarId)).subscribe({
      next: (response) => {
        this.getAvatar();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  onChangeAvatar(event, fileinput) {
    this.image = event.target.files[0];
    if (
      !['.png', '.jpeg', '.jpg', '.gif'].some((extension) =>
        this.image.name.endsWith(extension)
      )
    ) {
      this.resetForm(fileinput);
      this.toastr.showWarning(
        'Extension must be of type jpeg, jpg, png or gif ',
        'Invalid File extension'
      );
    }
  }

  resetForm(fileinput) {
    fileinput.value = null;
    this.image = null;
  }

  async addAvatar() {
    const formData = new FormData();
    const AvatarImage = this.image;
    if (this.image != null) {
      formData.append('AvatarImage', AvatarImage);
      (await this.QuibService.addAvatar(formData)).subscribe({
        next: (response) => {
          this.getAvatar();
        },
        error: (error) => {
          this.toastr.showError(
            'Avatar Filename Already Exists',
            'Duplicate Filename'
          );
        },
        complete: () => {},
      });
    } else this.toastr.showWarning('File cannot be empty', 'Cannot Add Avatar');
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
