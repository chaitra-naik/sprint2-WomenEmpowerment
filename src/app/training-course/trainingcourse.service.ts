import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainingcourse } from './trainingcourse';

@Injectable({
  providedIn: 'root'
})
export class TrainingcourseService {

  constructor(private httpclient:HttpClient) { }

  getCourseList(): Observable<Trainingcourse[]>{
    return this.httpclient.get<Trainingcourse[]>(`${"http://localhost:8080/trainingcourses"}`);
  }

  addTrainingCourse(trainingCourse: Trainingcourse): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/trainingcourse"}`, trainingCourse);
  }

  updateTrainingCourse(trainingCourseID:any,trainingCourse:Trainingcourse): Observable<Object>{
    return this.httpclient.put('${this.baseURL}/${id}',trainingCourse);
  }

  deleteTrainingCourse(trainingCourseID:any):Observable<Object>{
    return this.httpclient.delete('${this.baseURL}/${id}');

  }
}
