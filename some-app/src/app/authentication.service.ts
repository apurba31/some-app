import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public login(username:string, password:string)
  {
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username+":"+password)}); 
    return this.http.get(this.url, {headers, responseType:'text' as 'json'});
  }

  public getUsers()
  {
    let username="scofield";
    let password="1234";
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username+":"+password)}); 
    return this.http.get(this.url+"/getUsers", {headers});
  }
}
