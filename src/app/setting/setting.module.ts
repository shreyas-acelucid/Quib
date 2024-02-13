import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AvatarComponent } from './avatar/avatar.component'
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { TOSComponent } from './tos/tos.component';

@NgModule({
  declarations: [
    AvatarComponent,
    RecommendedMoviesComponent,
    TOSComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
