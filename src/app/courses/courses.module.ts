import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CoursesRoutingModule,
    MaterialModule
  ]
})

export class CoursesModule { }
