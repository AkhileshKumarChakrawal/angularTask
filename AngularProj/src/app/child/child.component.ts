import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers : [DataServiceService]
})
export class ChildComponent implements OnInit {

  @Input() ParentMsg;
  @Input() StudentData;
  childdata : any;
  @Output() sendData = new EventEmitter();
  cdata : string = "hello this is child";
  date ;
  constructor(private dateService : DataServiceService) { }

  ngOnInit() {
   this.date= this.dateService.getSystemDate();
  }
getData(data){
    this.childdata = data;
    console.log(this.childdata);
    this.sendData.emit(this.childdata);
}

}
