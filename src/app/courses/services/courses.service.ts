import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Course[] {
    return [
      {_id: "1", name: "Angular 8", category: "Angular"},
      {_id: "2", name: "AngularJS", category: "Angular"},
      {_id: "3", name: "Spring + Angular", category: "Spring, Angular"},
      {_id: "4", name: "Spring", category: "Spring"}
    ];
  }
}
