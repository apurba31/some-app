import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePageComponent } from './app/route-page/route-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginPageComponent},
    {path:"routePage", component:RoutePageComponent},
    {path:"homePage", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
