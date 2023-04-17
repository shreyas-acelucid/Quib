import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostActiveRoutingModule } from './quib-routing.module';
import { MostActiveComponent } from './most-active-quib/most-active.component';
import {RecentQuibComponent} from './recent-quib/recent-quib.component'
import { SharedModule } from '../shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MostActiveComponent,
    RecentQuibComponent,
   
  ],
  imports: [
    CommonModule,
    MostActiveRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuibModule { }
