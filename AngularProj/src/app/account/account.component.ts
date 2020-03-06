import {Component, Input, OnInit} from '@angular/core';
import {LoggingServiceService} from "../services/logging-service.service";
import {AccountServiceService} from "../services/account-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingServiceService,
              private accountsService: AccountServiceService) {}

  SetStatus(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
  ngOnInit() {
  }

}
