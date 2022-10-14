import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainee} from './trainee';

@Injectable({
  providedIn: 'root'
})
export class  TraineeService {

  private baseURL="http://localhost:8080/trainees";

  constructor(private httpclient:HttpClient) { }

  getTraineeList(): Observable<Trainee[]>{
    return this.httpclient.get<Trainee[]>(`${this.baseURL}`);
  }

  addTrainee(trainee: Trainee): Observable<Object>{
    return this.httpclient.post('${this.baseURL}/${id}',trainee);

  }
  updateTrainee(traineeId:any,trainee:Trainee): Observable<Object>{
    return this.httpclient.put('${this.baseURL}/${id}',trainee);
  }

  deleteTrainee(traineeId:any):Observable<Object>{
    return this.httpclient.delete('${this.baseURL}/${id}');

  }
  getTraineeById(traineeId:any):Observable<Trainee>{
    return this.httpclient.get<Trainee>('${this.baseURL}/${id}');

  }
  
  }
  
  
  
  


