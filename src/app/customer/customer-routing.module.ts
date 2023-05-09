import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard} from '../_services/auth-guard.service';
import {QuibUserComponent} from './quib-user/quib-user.component'
const routes: Routes = [
  { path: '', component: QuibUserComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'quib-user', component: QuibUserComponent,
  //  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
