import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Guitar } from '../guitar';
import { GuitarServiceService } from '../guitar-service.service';

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

  constructor(private service:AuthenticationService,
                private router: Router,
                private http:HttpClient,
                private guitarService: GuitarServiceService) { }

  ngOnInit() {
    let guitarResp = this.guitarService.getGuitars();
    guitarResp.subscribe(data => {
      console.log(data)
    });
  }
  
  // title: string = 'Login Page';
  // greeting = {'id': 'xxxx', 'content': 'Hello World!'}

  doLogin()
  {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      console.log(data)
    })
  }

  // checkRouting()
  // {
  //   // this.router.navigate()
  // }
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
}
