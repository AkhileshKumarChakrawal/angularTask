import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService3Service {

  constructor() { }
  getcurrentdate(){
    let date = new Date();
    return date;
  }
}
