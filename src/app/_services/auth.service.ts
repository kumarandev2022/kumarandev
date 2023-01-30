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
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  loginUser(user:User):Observable<object> {
    return this.http.post(AUTH_API + 'signin',user);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  
  clubRegistration(clubname: string, clubcode: number, yfsccode: string, address:string): Observable<any> {
    return this.http.post(AUTH_API + 'clubs', {
      clubname,
      clubcode,
      yfsccode,
      address
    }, httpOptions);
  }
  customerRegistration(clubcode:number, customerid:number, customername:string, password:string, gender:string, dob:string, phonenumber:number, address:string): Observable<any> {
    return this.http.post(AUTH_API + 'clubs', {
      clubcode, customerid, customername, password, gender, dob, phonenumber, address
    }, httpOptions);
  }
  //customerRegistration
  userProfile(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'user-register', {
      username,
      email,
      password
    }, httpOptions);
  }

  

  loanRequest(reqdate: string, loanamount: string): Observable<any> {
    return this.http.post(AUTH_API + 'loan-request', {
      reqdate,
      loanamount
    }, httpOptions);
  }

  savings(createDate: string, totalMembers: number, monthlySavAmt: number, totalSavAmt: number): Observable<any> {
    return this.http.post(AUTH_API + 'savings-share', {
      createDate,
      totalMembers,
      monthlySavAmt,
      totalSavAmt
    }, httpOptions);
  }

   interestShare(savedate: string, totalmembers: bigint, monthlysavings: bigint, totalsavings: bigint): Observable<any> {
    return this.http.post(AUTH_API + 'interest', {
      savedate,
      totalmembers,
      monthlysavings,
      totalsavings
    }, httpOptions);
  }

  
}