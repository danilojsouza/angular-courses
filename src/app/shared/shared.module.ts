import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
