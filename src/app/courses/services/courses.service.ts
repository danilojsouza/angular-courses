import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, first, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(courses => console.log(courses))
    )
  }
}
