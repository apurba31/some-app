import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string="";
  password: string="";
  message:any;

  constructor(private service:AuthenticationService) { }

  ngOnInit(): void {
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

}
