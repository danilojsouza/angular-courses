import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { first, tap } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = '/assets/courses.json';

  findAll() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    )
  }
}
