import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/dataService';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { FilterData } from '../interfaces/dashboardGrid.interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-adv-filter-panel',
  templateUrl: './adv-filter-panel.component.html',
  styleUrls: ['./adv-filter-panel.component.scss']
})
export class AdvFilterPanelComponent implements OnInit {
  model: any = {};
  
  selectedValue: string;
  statuses: SelectItem[];
  pmtstatuses: SelectItem[];
  decodedata: FilterData;
  orgname: SelectItem[] = [];
  ouNameList: string[] = [];
  totalRecordsCount: any;

  //selectedValue: string = 'val1';
  constructor(private _apiService: ApiService, public dataservice: DataService, private router: Router,private spinnerService: Ng4LoadingSpinnerService
    ) {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    this.model.fromDate = d;
    this.model.toDate = new Date();
    this.model.pmtfromDate = d;
    this.model.pmttoDate = new Date();
   // this.decodedata = this.dataservice.decodedData;
  //  this.ouNameList = this.decodedata.ouName;
    console.log(this.ouNameList);
    this.statuses = [
      { label: 'Select Status', value: null },
      { label: 'Acknowledged   ', value: { id: 1, name: 'Ack', code: 'ACKNOWLEDGED' } },
      { label: 'Partially Acknowledged', value: { id: 2, name: 'PartiallyAck', code: 'PARTIALLYACKNOWLEDGED' } },
      { label: 'Rejected', value: { id: 3, name: 'Rejected', code: 'REJECTED' } },
      { label: 'New', value: { id: 4, name: 'New', code: 'NEW' } },
    ];


    this.pmtstatuses = [
      { label: 'Select Status', value: null },
      { label: 'Accepted', value: { id: 1, name: 'Accepted', code: 'ACCP' } },
      { label: 'Pending', value: { id: 2, name: 'Pending', code: 'PEND' } },
      { label: 'Rejected', value: { id: 3, name: 'Rejected', code: 'REJ' } },

    ];
    if (this.ouNameList) {
      for (var i in this.ouNameList) {
        this.orgname[i] = {
          "label": this.ouNameList[i],
          "value": {
            "id": i,
            "name": this.ouNameList[i],
            "code": this.ouNameList[i]
          }
        }
      }
    }
  }
  ngOnInit() {
   // this.decodedata = this.dataservice.decodedData;
  //  this.ouNameList = this.decodedata.ouName;
    this.dataservice.changeMessage("Advanced Filter");
  }


  advFilterFile() {
    this.spinnerService.show();
    this.model.pageNo=1;
    this._apiService.advFilterFile(this.model).then(res => {
      console.log(this.model);
      console.log(res);
      if(res){
          this.dataservice.noofRecords=res[0].countRows;
          this.totalRecordsCount=res[0].countRows;
          console.log("ACKcount<<"+this.totalRecordsCount);
      }
      for (let row in res) {
        if (res[row].ackStatus == null)
          res[row].ackStatus = 'NEW';
      }
      this.dataservice.currentModel=this.model;
      this.dataservice.tableDataFile = res;
      
      this.spinnerService.hide();

      this.router.navigate(['/dashboardFile']);

    },
      (error) => {
        window.alert("Please try later");
      });
  }

  advFilter() {
    //   this.model.fromDate = null;
    //  this.model.toDate = null;
    this.spinnerService.show();

    this._apiService.advFilter(this.model).then(res => {
      console.log(this.model);
      console.log(res);
      this.dataservice.tableData = res;
      this.spinnerService.hide();

      this.router.navigate(['/dashboard']);

    },
      (error) => {
        window.alert("Please try later");
      });
  }

}
