import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminQuibComponent } from './admin-quib/admin-quib.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { RecentQuibComponent } from './recent-quib/recent-quib.component';

const routes: Routes = [
  {
    path: '',
    component: RecentQuibComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'recent-quib', component: RecentQuibComponent
  },
  {
    path: 'admin-quib', component: AdminQuibComponent
  },
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostActiveRoutingModule { }
