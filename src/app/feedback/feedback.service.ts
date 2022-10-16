import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseURL="http://localhost:8080/feedback";
  constructor(private httpclient:HttpClient) { }

  getFeedbackt(): Observable<Feedback[]>{
    return this.httpclient.get<Feedback[]>(`${this.baseURL}`);
  }

  addFeedback(feedback:Feedback): Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8080/ngo"}`, feedback);
  }

  getFeedbackId(FeedbackId: any): Observable<Feedback>{
    return this.httpclient.get<Feedback>(`${"http://localhost:8080/ngo"}/${Feedback}`);
  }

  
}
