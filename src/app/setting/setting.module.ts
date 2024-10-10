import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AvatarComponent } from './avatar/avatar.component'
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { TOSComponent } from './tos/tos.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ImageCropperModule } from 'ngx-image-cropper';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AvatarComponent,
    RecommendedMoviesComponent,
    TOSComponent,
    TooltipsComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule,
    MatSlideToggleModule,
    ImageCropperModule
  ],
})
export class SettingModule {}
