import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:4210/emp/getdata";
  constructor(private httpClient: HttpClient) { }

  getEMPList(): Observable<Employee[]>{
    console.log("150");
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}
