import {Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss'],
  providers : [DataServiceService]
})
export class ParentViewComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent , {static:false}) cdata : ChildComponent;
  childData : any;
  currentDate;
  constructor(private dataservice : DataServiceService) { }

  ngOnInit() {
  this.currentDate = this.dataservice.getSystemDate();
  }
ngAfterViewInit(): void {
  this.childData =  this.cdata.cdata;
}
}
