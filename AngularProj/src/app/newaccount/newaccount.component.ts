import { Component, OnInit } from '@angular/core';
import {LoggingServiceService} from "../services/logging-service.service";
import {AccountServiceService} from "../services/account-service.service";

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss']
})
export class NewaccountComponent implements OnInit {

  constructor(private loggingService: LoggingServiceService,
              private accountsService: AccountServiceService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }
  ngOnInit() {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
