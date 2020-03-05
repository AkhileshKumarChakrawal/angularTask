import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /* styleUrls: ['./home.component.css'] */
  styles: []
})
export class HomeComponent implements OnInit {
  mail = '';
  password = '';
  constructor(private router: Router) {
    this.mail = localStorage.getItem("mail");
    this.password = localStorage.getItem("password");
    /* this.mail = sessionStorage.getItem("mail");
    this.password = sessionStorage.getItem("password"); */
    console.log(this.mail+" "+this.password);
  }

  ngOnInit() {
  }

  studentsList(){
    this.router.navigate(['studentDetails']);
  }

}
