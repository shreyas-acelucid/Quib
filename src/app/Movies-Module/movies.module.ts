import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies-list/all-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AdminScreenshotsComponent } from './admin-screenshots/admin-screenshots.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminDailoguesComponent } from './admin-dailogues/admin-dailogues.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AllMoviesComponent,
    ActiveMoviesComponent,
    AdminScreenshotsComponent,
    AdminDailoguesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    MultiSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ConfirmDialogModule,
  ],
})
export class MoviesModule {}
