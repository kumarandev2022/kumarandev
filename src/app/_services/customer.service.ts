import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  // getCustomerInfo(clubcode: number): Observable<any> {
  //   return this.http.get(AUTH_API + 'customerinfo/'+ {clubcode},
  //   { responseType: 'text' });
  // }


//   createEmployee(employee: Object): Observable<Object> {
//     return this.http.post(`${AUTH_API}`, employee);
//   }

//   updateEmployee(id: number, value: any): Observable<Object> {
//     return this.http.put(`${AUTH_API}/${id}`, value);
//   }

  // deleteEmployee(customerid: number): Observable<any> {
  //   return this.http.delete(`${AUTH_API}/${customerid}`, { responseType: 'text' });
  // }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${AUTH_API}`);
  // }
}