import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { AllMoviesComponent } from './all-movies-list/all-movies.component';
import { AdminScreenshotsComponent } from './admin-screenshots/admin-screenshots.component';

const routes: Routes = [
  {
    path: '',
    component: AllMoviesComponent,
  },
  {
    path: 'all-movies',
    component: AllMoviesComponent,
  },
  {
    path: 'active-movies',
    component: ActiveMoviesComponent,
  },
  {
    path: 'admin-screenshots/:movieId/:movieTitle',
    component: AdminScreenshotsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
