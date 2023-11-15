import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostActiveRoutingModule } from './quib-routing.module';
import { AdminQuibComponent } from './admin-quib/admin-quib.component';
import { RecentQuibComponent } from './recent-quib/recent-quib.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [AdminQuibComponent, RecentQuibComponent],
  imports: [
    CommonModule,
    MostActiveRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule,
  ],
})
export class QuibModule {}
