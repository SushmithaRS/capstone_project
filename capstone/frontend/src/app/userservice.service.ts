import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { Organisers } from './organisers';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private baseURL="http://localhost:8080";
  constructor(private http:HttpClient) { }
  // getUserData(emailId: string, password: string): Observable<{ loggedIn: boolean, user_id: number }> {
  //   // Make your HTTP request to authenticate the user
  //   // If authentication is successful, return { loggedIn: true, userId: user_id }
  //   // If authentication fails, return { loggedIn: false, userId: null }
  //   return this.http.get<{ loggedIn: boolean, user_id: number }>(`${this.baseURL}/${emailId}/${password}`);
  // }
  
  getUserData(emailId:String,password:String){
    return this.http.get(`${this.baseURL}/users/${emailId}/${password}`);
  }

  getOrganiserData(emailId:String,password:String){
    return this.http.get(`${this.baseURL}/organisers/${emailId}/${password}`);
  }


  createUser(users:Users):Observable<Object>{
    return this.http.post(`${this.baseURL}/users`,users);
  }

  createOrganiser(organisers:Organisers):Observable<Object>{
    return this.http.post(`${this.baseURL}/organisers`,organisers);
  }

  getUserById(id: any): Observable<Users>{
    return this.http.get<Users>(`${this.baseURL}/users/${id}`);  
  }
  getOrganiserById(id: any): Observable<Organisers>{
    return this.http.get<Organisers>(`${this.baseURL}/organisers/${id}`);  
  }
  getUserId(email:any):Observable<number>{
    return this.http.get<number>(`${this.baseURL}/users/email/${email}`);
  }

  getOrganiserId(email:any):Observable<number>{
    return this.http.get<number>(`${this.baseURL}/organisers/email/${email}`);
  }

  getUserName(email:any):Observable<any>{
    return this.http.get<any>(`${this.baseURL}/users/mail/${email}`);
  }


  getOrganiserName(email:any):Observable<any>{
    return this.http.get<any>(`${this.baseURL}/organisers/mail/${email}`);
  }
 
 
}
