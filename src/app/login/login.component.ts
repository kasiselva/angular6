import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username : string;
  password : string;
  logindata : any[];

  constructor(private router : Router , private loginService : LoginService) {
  }
  onLogin()  {
    debugger;
    if(this.username == undefined || !this.username)
    {
      alert("Please enter username");
      return;
    }
    if(this.password == undefined || !this.password)
    {
      alert("Please enter password");
      return;
    }
    this.loginService.getLoginList().subscribe(userres => {
      if(userres!=null && userres!= undefined && userres.length>0)
      {
      let validres =  userres.find(x => x.username === this.username && x.password === this.password)
      if(validres!=null && validres!= undefined)
      {
        this.router.navigate(["dashboard"]);
      }
      else
      {
        alert("Invalid credentials");
      }
      }
      else{
        alert("Login data not available");
      }
      debugger;
      var aa = userres;
    });
  // if(this.logindata!=undefined && this.logindata != null && this.logindata.length > 0)
  // {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
  // else{
  //   alert("Login data not available");
  // }
}

}
