import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guitar } from './guitar';

@Injectable({
  providedIn: 'root'
})
export class GuitarServiceService {

  url: string = "http://localhost:8080/guitars";

  constructor(private http: HttpClient) { }

  getGuitars(){
    return this.http.get<Guitar>(this.url);
  }
}
