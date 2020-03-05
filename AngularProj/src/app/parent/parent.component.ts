import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  title = 'parent data';
  check : boolean = false;
  student = [
    {sid : 101 , sname : 'akhilesh', address : 'sr nagar'},
    {sid : 102 , sname : 'aman' , address : 'balkampet'},
    {sid : 103 , sname : 'amar', address : 'gorakhpur'}

  ];
  recieveChildData;
  constructor() { }

  ngOnInit() {
   /* console.log(this.recieveChildData);
    console.log(this.recieveChildData.sid + " "+ this.recieveChildData.sname+" "+this.recieveChildData.address);
    if(this.recieveChildData ===null){
      this.check = true;
    }*/
  }
  reciveMsg($event){
this.recieveChildData = $event;

console.log(this.recieveChildData);
  }

}
