import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  Studentlogin : FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  loginMsg ='';
  constructor(private fb : FormBuilder , private router : Router) { }
  emailGet = localStorage.getItem('emaildata');
  passwordGet = localStorage.getItem('passdata');

  ngOnInit() {
    this.Studentlogin = this.fb.group({
      email : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password : ['', Validators.required]
    });

  }

  get fval() {
    return this.Studentlogin.controls;
  }

  LoginSubmit(){
    console.log(this.Studentlogin.value);
    console.log(localStorage);
    if(this.Studentlogin.get('email').value === this.emailGet && this.Studentlogin.get('password').value === this.passwordGet){
      localStorage.clear();
      console.log(localStorage);
      this.router.navigate(['/students']);
    }
    else{
      this.loginMsg ="email and password not match ";
      console.log("email and password not match");

    }

  }
}
