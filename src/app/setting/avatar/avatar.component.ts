import { Component, OnInit } from '@angular/core';
import { QuibService } from 'src/app/_services/Quib.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  myForm: FormGroup;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private QuibService: QuibService,
    private toastr: ToastrMsgService
  ) {
    this.myForm = new FormGroup({
      image: new FormControl(null, [
        Validators.required,
        this.imageFormatValidator,
      ]),
    });
  }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.getAvatar();
  }

  imageFormatValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    if (control.value) {
      const file = control.value as File;
      const allowedFormats = ['image/jpeg', 'image/png'];

      if (allowedFormats.indexOf(file.type) === -1) {
        return { invalidImageFormat: true };
      }
    }
    return null;
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
        console.log(error);
        console.log(error.error.message);
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
        console.log(response);
        this.toastr.showSuccess('Avatar deleted', 'Avatar');
        this.ngOnInit();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  onChangeAvatar(event) {
    this.image = event.target.files[0];
  }

  resetForm(fileinput) {
    fileinput.value = null;
    this.image = null;
  }

  async addAvatar() {
    const formData = new FormData();
    const AvatarImage = this.image;
    if (this.image != null) {
      if (this.myForm.get('image').hasError('invalidImageFormat')) {
        if (this.allAvatars.length < 16) {
          formData.append('AvatarImage', AvatarImage);
          (await this.QuibService.addAvatar(formData)).subscribe({
            next: (response) => {
              this.toastr.showSuccess(`Avatar Added`, 'Avatar');
              this.getAvatar();
            },
            error: (error) => {
              this.toastr.showError('Avatar Filename Already Exists', 'Avatar');
            },
            complete: () => {},
          });
        } else
          this.toastr.showError(
            'Maximum number of default avatars is 16',
            'Avatar'
          );
      } else
        this.toastr.showError('File must be of type .jpeg or .png', 'Avatar');
    } else this.toastr.showError('File cannot be empty', 'Avatar');
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
