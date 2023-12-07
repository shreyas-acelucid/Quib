import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SharedModule as SharedImportsModule } from '../_modules/shared.module';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { QuibUserComponent } from './quib-user/quib-user.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [QuibUserComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    SharedImportsModule,
    ConfirmDialogModule,
    AngularMaterialModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MatTableModule,
    PaginatorModule,
  ],
})
export class CustomerModule {}
