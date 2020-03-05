import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataServiceService} from "../services/data-service.service";



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  providers :[DataServiceService]
})
export class StudentDetailsComponent implements OnInit {


  sIdMarks: any;
  selectId: number;
  studentsList;
  studentsMarks
  constructor(private router: Router , private service : DataServiceService) { }


  ngOnInit(){
  this.studentsList = this.service.getStudents();
  this.studentsMarks = this.service.getStudentmarks();

}

  /* studentEdit(studentId: number, studentName: string){
    this.router.navigate(['edit', studentId, studentName]);
  } */

  /* studentView(id: number, obj){
    this.sIdMarks = obj;
    this.selectId = id;
  } */

  studentView(id: number){
    this.selectId = id;
    for(let i=0; i<this.studentsMarks.length; i++){
      if(this.studentsMarks[i].stuId == id){
        this.sIdMarks = this.studentsMarks[i];
      }
    }
    /* console.log(id);
    this.studentsMarks.forEach(
      function(value){
        console.log(value);
        alert(id);
        if(value.stuId === id){
          this.sIdMarks = value;
          //alert(value.stuId);
        }
      }
    ); */
  }

}
