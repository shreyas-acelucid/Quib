import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ConfirmationService } from 'primeng/api';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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
  display: boolean = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
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
      message: 'Are you sure that you want to delete this  Avatar?',
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
        this.ngxLoader.stop();
      },
      error: (error) => {
        this.toastr.showError('Avatars could not be fetched', 'Error');
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
        this.toastr.showSuccess('Avatar deleted successfully', 'Success');
      },
      error: (error) => {
        this.toastr.showError('Failed to delete Avatar', '');
        console.log(error);
      },
      complete: () => {},
    });
  }

  imageCropped(event: ImageCroppedEvent) {
    //preview
    this.croppedImage = event.blob;
    //converting to upload
    const fileBeforeCrop = this.imageChangedEvent.target.files[0];
    this.image = new File([this.croppedImage], fileBeforeCrop.name, {
      type: fileBeforeCrop.type,
    });
  }

  onChangeAvatar(event, fileinput) {
    this.image = event.target.files[0];
    this.imageChangedEvent = event;
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
    } else this.display = true;
  }

  async addAvatar(fileinput) {
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
        complete: () => {
          this.resetForm(fileinput);
        },
      });
    } else this.toastr.showWarning('File cannot be empty', 'Cannot Add Avatar');
  }

  resetForm(fileinput) {
    fileinput.value = null;
    this.image = null;
    this.display = false;
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
