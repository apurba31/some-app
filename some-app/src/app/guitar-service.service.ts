import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guitar } from './guitar';

@Injectable({
  providedIn: 'root'
})
export class GuitarServiceService {

  url: string = "http://localhost:8080/guitars";

  constructor(private http: HttpClient,
              private http1: HttpClientModule) { }

  getGuitars(){
    return this.http.get<Guitar>(this.url);
  }
}
