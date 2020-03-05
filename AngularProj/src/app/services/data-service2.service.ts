import { Injectable } from '@angular/core';
import {DataService3Service} from "./data-service3.service";

@Injectable(/*{
  providedIn: 'root'
}*/)
export class DataService2Service {

  Marks =[
    {math : 66, english : 77 , physics : 88, sid : 101, name : 'Aman'},
    {math : 94, english : 58 , physics : 89, sid : 102, name :'Azhar'},
    {math : 46, english : 98 , physics : 48, sid : 103, name : 'Akash'},
    {math : 84, english : 39 , physics : 71, sid : 104 , name: 'Amar'},
    {math : 43, english : 62 , physics : 54, sid : 105 , name : 'Aayushaman'}
  ];

  constructor(private dateService : DataService3Service) { }
  getMarks(){
    return this.Marks;
  }
  getcurrentDate(){
    this.dateService.getcurrentdate();
  }
}
