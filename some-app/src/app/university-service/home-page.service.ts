import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../university';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  url: string = "https://api.zippopotam.us/us/33162 ";
  //|| http://universities.hipolabs.com/search?country=United+States
  constructor(private http:HttpClient) { }

  getUniversity(){
    return this.http.get<University>(this.url);
  }
}
