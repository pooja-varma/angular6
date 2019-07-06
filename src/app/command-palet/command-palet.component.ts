import { Component, OnInit } from '@angular/core';
import { ApiService, PaymentStatus } from './../services/api.service';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-command-palet',
  templateUrl: './command-palet.component.html',
  styleUrls: ['./command-palet.component.scss']
})
export class CommandPaletComponent implements OnInit {
  
  commandPalets: Array<{ label: string; className: string; count: number }>;
  message:string;
  constructor(private _apiService: ApiService,public dataservice: DataService) { }
  reject: number = 0;
  pending: number = 0;
  accept: number = 0;
  ngOnInit() {
    this.dataservice.headingData.subscribe(message=>this.message=message);
  //  this.getPaymentStatusCn();
   
    this.commandPalets = [
      {
        label: 'All Payment',
        className: 'success',
        count: this.accept + this.pending + this.reject
      },
      {
        label: 'Accepted',
        className: 'other',
        count: this.accept
      },
      {
        label: 'Pending',
        className: 'extra-status',
        count: this.pending
      },
      {
        label: 'Rejected',
        className: 'rejected',
        count: this.reject
      }
    ];

  }

  // getPaymentStatusCn(): void {
  //   this._apiService.getPaymentStat().then(res => {
      
  //     res.forEach(element => {
  //       if (element.status === "ACCP") {
  //         this.accept = element.cnt;
  //       }
  //       if (element.status === "PDNG") {
  //         this.pending = element.cnt;
  //       }
  //       if (element.status === "RJCT") {
  //         this.reject = element.cnt;
  //       }
  //     });

  //     this.commandPalets[0].count = this.reject + this.pending + this.accept;
  //     this.commandPalets[1].count = this.accept;
  //     this.commandPalets[2].count = this.pending;
  //     this.commandPalets[3].count = this.reject;

  //   });
  // }
}
