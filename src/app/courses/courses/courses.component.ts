import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor() {
    this.courses = [
      {_id: "1", name: "Angular 8", category: "Angular"},
      {_id: "2", name: "AngularJS", category: "Angular"},
      {_id: "3", name: "Spring + Angular", category: "Spring, Angular"},
      {_id: "4", name: "Spring", category: "Spring"}
    ];
  }

  ngOnInit(): void {
  }

}
