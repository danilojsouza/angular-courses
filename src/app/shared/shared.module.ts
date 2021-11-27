import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
