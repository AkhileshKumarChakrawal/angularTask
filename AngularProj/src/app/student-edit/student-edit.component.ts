import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  studentId: number;
  studentName: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let stuId = parseInt(params.get('id'));
      this.studentId = stuId;
      let stuName = params.get('name');
      this.studentName = stuName;
    });
  }

  gotoBack(){
    this.router.navigate(['studentDetails']);
  }

}
