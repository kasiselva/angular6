import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/loginservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginParam} from '../customclass/loginparam'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  email: string;
  password: string;
  logindata: any[];

  constructor(private router: Router, private loginService: LoginService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onLogin() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let loginParam = new LoginParam();
    loginParam.Username = this.f.email.value;
    loginParam.Password = this.f.password.value;
    debugger;
    this.loginService.login(loginParam).subscribe(result=>{
      debugger;
      var res = result;
    },
    err =>{
      debugger;
      var error = err;
    });
    //////////////////////*********************************** */
    // this.loginService.getLoginList().subscribe(userres => {
    //   if (userres != null && userres != undefined && userres.length > 0) {
    //     let validres = userres.find(x => x.email === this.f.email.value && x.password === this.f.password.value)
    //     if (validres != null && validres != undefined) {
    //       this.router.navigate(["dashboard"]);
    //     }
    //     else {
    //       this.loading = false;
    //       alert("Invalid credentials");
    //     }
    //   }
    //   else {
    //     this.loading = false;
    //     alert("Login data not available");
    //   }
    //   debugger;
    //   var aa = userres;
    // });
    //////////////***************** *///////////////////
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
