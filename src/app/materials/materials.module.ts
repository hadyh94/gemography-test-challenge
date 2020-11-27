import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  exports: [
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialsModule { }
