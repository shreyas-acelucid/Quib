import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { TOSComponent } from './tos/tos.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: '',
    component: AvatarComponent,
  },
  {
    path: 'avatar',
    component: AvatarComponent,
  },
  {
    path: 'recommended-movie',
    component: RecommendedMoviesComponent,
  },
  {
    path: 'tos',
    component: TOSComponent,
  },
  {
    path: 'tooltips',
    component: TooltipsComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
