import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{6,}";
  status = "";
  constructor(private fb : FormBuilder , private router : Router) { }

  StudentForm : FormGroup;
  submitted = false;
  ngOnInit() {
    this.StudentForm = this.fb.group({
      fullName: ['', [Validators.required , Validators.minLength(3), Validators.maxLength(10)]],
      lastName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      dob : ['', Validators.required],
      gender :['', Validators.required],
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.pattern(this.passwordPattern)]],
      confirmPassword: ['', Validators.required],

      Marks : this.fb.group({
        math : ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        english : ['', Validators.required],
        science : ['', Validators.required]
        /*physics : [''],
        english : ['']*/
      })
    });

  }
  get fval() {
    return this.StudentForm.controls;
  }
  get english(){
    return this.StudentForm.get('Marks').get('english');
  }
  get math(){
    return this.StudentForm.get('Marks').get('math');
  }
  get science(){
    return this.StudentForm.get('Marks').get('science');
  }

  passValidate(){
    let pwd=this.StudentForm.get('password').value;
    let cpwd=this.StudentForm.get('confirmPassword').value;
    if((pwd===cpwd)){
      this.status="";
    }
    else{
      this.status="password and confirm password must be same";

    }
  }

  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.StudentForm.invalid) {
      console .log(this.StudentForm.invalid);
      return false;
    }
    alert('form fields are validated successfully!');
    console.log(this.StudentForm.value);
    console.log("first name::"+this.fval.fullName.value + " last name::"+this.fval.lastName.value
      +" date of birth::"+this.fval.dob.value+" gender ::"+this.fval.gender.value+" email::"+this.fval.email.value+" password::"+this.fval.password.value+
      "math Marks::"+this.StudentForm.get('Marks').get('math').value
      +" english Marks::"+this.StudentForm.get('Marks').get('english').value
      + " science Marks::"+this.StudentForm.get('Marks').get('science').value);
    localStorage.setItem('emaildata' , this.StudentForm.get('email').value);
    localStorage.setItem('passdata', this.StudentForm.get('password').value);
    this.router.navigate(['/students']);

  }

}
