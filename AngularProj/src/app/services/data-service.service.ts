import { Injectable } from '@angular/core';
import {DataService2Service} from "./data-service2.service";

@Injectable(/*{
  providedIn: 'root'
}*/)
export class DataServiceService {
  student = [
    {sid : 101 , sname : 'Aman', address : {dist : 'Vns', state : 'UP', zip : 221005 }},
    {sid : 102 , sname : 'Azhar', address : {dist : 'Mumbai', state : 'Maharastra', zip : 221003 }},
    {sid : 103 , sname : 'Akash', address : {dist : 'Lucknow', state : 'UP', zip : 241063 }},
    {sid : 104 , sname : 'Amar', address : {dist : 'Gorakhpur', state : 'UP', zip : 218503 }},
    {sid : 105 , sname : 'Aayushaman', address : {dist : 'bhopal', state : 'MP', zip : 418503 }}
  ];



  getStudents()
  {
    return this.student;
  }

  constructor(private marksservice : DataService2Service) { }
  getStudentmarks(){
    return this.marksservice.getMarks();
  }
  getSystemDate(){
    return this.marksservice.getcurrentDate();
  }
}
