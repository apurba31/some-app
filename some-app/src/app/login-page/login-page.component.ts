import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Guitar } from '../guitar';
import { GuitarServiceService } from '../guitar-service.service';
import { University } from '../university';
import { HomePageService } from '../university-service/home-page.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string="";
  password: string="";
  message:any;
  show: boolean = true;
  guitar: Guitar[] | any;
  university: University[] | any;
  errorMessage: string = '';
  sub: Subscription = new Subscription;

  constructor(private service:AuthenticationService,
                private router: Router,
                private http:HttpClient,
                private guitarService: GuitarServiceService,
                private universityService: HomePageService) { }

  ngOnInit() {
    let guitarResp = this.guitarService.getGuitars();
    guitarResp.subscribe( {
      next: guitar =>{ 
        this.guitar = guitar;
      }
      // error: err => this.errorMessage = err
    });
    this.showGuitar();
    // this.universityService.getUniversity().subscribe(
    //   {
    //     next: university =>{
    //       this.university = university;
    //       console.log(university);
    //     },
    //     error: err => this.errorMessage = err
    //   });
      // data => 
      // {
      //   console.log(data);
      // });
  }
  
  // title: string = 'Login Page';
  // greeting = {'id': 'xxxx', 'content': 'Hello World!'}

  doLogin()
  {
    let resp = this.service.login(this.username, this.password);
    // resp.subscribe(data => {
    //   console.log(data)
    // })
  }

  checkRouting()
  {
    // this.router.navigate()
  }
  toggleShow()
  {
    this.show =! this.show;
  }

  checkOutput(name: Event)
  {
    console.log('Output works!' + name);
  }

  showGuitar(){
    let guitarResp = this.guitarService.getGuitars();
    guitarResp.subscribe(data => {
      console.log(data)
    });
  }

  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }
}
function next(next: any, arg1: (guitar: any) => void) {
  throw new Error('Function not implemented.');
}

