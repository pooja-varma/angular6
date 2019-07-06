import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { FileGridData, TableColumns, Tabs } from './../interfaces/dashboardGrid.interface';
import { TableModel } from './tableFile.model';
import { DataService } from '../services/dataService';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { EncodedData } from '../models/payment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-table',
  templateUrl: './tableFile.component.html',
  styleUrls: ['./tableFile.component.scss']
})
export class TableFileComponent implements OnInit {

  loading: boolean;
  tabList: Array<Tabs>;
  currTab: number;
  columns: Array<TableColumns>;
  tableData: Array<FileGridData>;
  allData: Array<FileGridData>;
  noOfRowToDisplay = 5;
  openDialog: boolean;
  openDeleteDialog: boolean;
  selectedItemRow: FileGridData;
  model: any = {};
  private _tableModel: TableModel;
  paramValue: EncodedData = {} as any;
  totalRecordsCount: any;
  pageNo:any;
  flag: boolean=false;
  constructor(private _apiService: ApiService, public dataservice: DataService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {

    this.tabList = [
      { label: 'All Payments', key: 0 },
      { label: 'New', key: 1 },
      { label: 'Acknowledged', key: 2 },
      { label: 'Partially Acknowledged', key: 3 },
      { label: 'Rejected', key: 4 }
    ];

    this.currTab = this.tabList[0].key;

    var d = new Date();
    d.setHours(0, 0, 0, 0);
    this.model.fromDate = d;
    this.model.toDate = new Date();
    if (this.dataservice.decodedData) {
      this.model.orgName = this.dataservice.decodedData.ouName[0];
    }
  }


  ngOnInit() {


    if (this.dataservice.tableDataFile) {
      this.tableData = this.dataservice.tableDataFile;
      this.totalRecordsCount= this.dataservice.noofRecords;
      console.log("ifcount<<"+this.totalRecordsCount);
    }
    else {
      
      var d = new Date();
      d.setHours(0, 0, 0, 0);
      this.model.fromDate = d;
      this.model.toDate = new Date();
      this.model.flag=true;
      // this.decryptURL();
      this.advFilterFile(this.model);

    }
    this.allData = this.tableData;
    if(this.tableData)
    {
      this.totalRecordsCount=this.tableData[0].countRows;
      console.log("inticount<<"+this.totalRecordsCount);
    }
    this._tableModel = new TableModel();
    this.columns = this._tableModel.getTableProps();
    this.loading = false;
    this.dataservice.changeMessage("File Based Details");
    //  this.fetchTableData('all');
  }

  /*decryptURL() {
    const url = window.location.href;

    //  let paramValue:EncodedData;
    let parameters;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      parameters = httpParams.get('ouName');

      //  parameters = atob(paramValue);
      //let toArray = parameters.split("&");
      if (this.paramValue) {
        //this.paramValue.params=parameters;
        this.paramValue.params = parameters;
      }
      this._apiService.getDecryptedValue(this.paramValue).then(res => {
        console.log(res)

        this.dataservice.decodedData = res;
        //
        // this.advFilterFile(res)

      },
        (error) => {
          window.alert("Please try later");
        }
      );

    }


  }*/
  advFilterFile(model:any) {
    /*    if (this.dataservice.decodedData) {
          if (this.dataservice.decodedData.ouName && this.dataservice.decodedData.ouName.length > 0) {
            this.model.orgName = {
              "label": this.dataservice.decodedData.ouName[0],
              "value": {
                "id": 0,
                "name": this.dataservice.decodedData.ouName[0],
                "code": this.dataservice.decodedData.ouName[0]
              }
            }
          }
          //this.model.orgName = res.ouName[0];
        }*/
   /* this.spinnerService.show();
    this.model.pageNo=1;
    this._apiService.advFilterFile(this.model).then(res => {
    
      for (let row in res) {
        if (res[row].ackStatus == null) {
          res[row].ackStatus = 'NEW';
        }
      }
      
      this.tableData = res;
      this.allData = this.tableData;
      () => this.spinnerService.hide();
    },

      (error) => {
        window.alert("Please try later");
      },

    );*/
    model.pageNo=1;
    this.advFilterFilePage(model);
  }
  fetchTableData(status): void {
    this._apiService.getTableDataFile(status).then(res => {

      for (let row in res) {
        console.log("<<<<<" + res); // "species"
        if (res[row].status == "REJECTED")
          res[row].status = 'REJECTED';
        else if (res[row].status == "ACKNOWLEDGED")
          res[row].status = 'ACKNOWLEDGED';
        
        console.log(res[row].status);
      }
      this.tableData = res;
    }
      ,
      (error) => {
        window.alert("Please try later");
      });
  }


  selectTab(tab: Tabs): void {
    this.currTab = tab.key;
    this.tableData = this.allData;


    console.log(this.tableData)
    if (this.currTab == 0 && this.tableData != null) {
      // need to write logic to change data wrt the selected tab
      // this.fetchTableData('all');
      //this.tableData = this.tableData.filter(rowdata => rowdata.status === 'all');
      this.tableData = this.allData;
    }
    else if (this.currTab == 1 && this.tableData != null) {
      //this.fetchTableData('ACCP');
      this.tableData = this.tableData.filter(rowdata => rowdata.ackStatus === 'NEW');
      //this.tableData.
    }
    else if (this.currTab == 2 && this.tableData != null) {
        //this.fetchTableData('ACCP');
        //this.tableData = this.tableData.filter(rowdata => rowdata.ackStatus === 'ACKNOWLEDGED');
        this.tableData = null;
        this.model=this.dataservice.currentModel;
        this.model.pageNo=1;
        this.model.pmtGpSts="ACKNOWLEDGED";
        
        this._apiService.advFilterFile(this.model).then(res => {
          if (res) {
            this.totalRecordsCount = res[0].countRows;
          //   console.log("count<<"+this.totalRecordsCount);
          }
        this.tableData = res;
        
        () => this.spinnerService.hide();
      },
      (error) => {
          window.alert("Please try later");
      },
    );
    }
    else if (this.currTab == 3 && this.tableData != null) {
      //this.fetchTableData('PDNG');
      //this.tableData = this.tableData.filter(rowdata => rowdata.ackStatus === 'PARTIALLYACKNOWLEDGED');
        this.tableData = null;
        this.model=this.dataservice.currentModel;
        this.model.pageNo=1;
        this.model.pmtGpSts="PARTIALLYACKNOWLEDGED";
        
        this._apiService.advFilterFile(this.model).then(res => {
          if (res) {
            this.totalRecordsCount = res[0].countRows;
          //   console.log("count<<"+this.totalRecordsCount);
          }
        this.tableData = res;
        
        () => this.spinnerService.hide();
      },
      (error) => {
          window.alert("Please try later");
      },
    );
    }
    else if (this.currTab == 4 && this.tableData != null) {
      //this.fetchTableData('PDNG');
     // this.tableData = this.tableData.filter(rowdata => rowdata.ackStatus === 'REJECTED');
        this.tableData = null;
        this.model=this.dataservice.currentModel;
        this.model.pageNo=1;
        this.model.pmtGpSts="REJECTED";
        
        this._apiService.advFilterFile(this.model).then(res => {
          if (res) {
            this.totalRecordsCount = res[0].countRows;
          //   console.log("count<<"+this.totalRecordsCount);
          }
        this.tableData = res;
        
        () => this.spinnerService.hide();
      },
      (error) => {
          window.alert("Please try later");
      },
    );
    }
    
  }

  openDialogBox(rowData: FileGridData) {
    
    this._apiService.filePaymentDetails(rowData).then(res => {
      console.log(rowData);
      console.log(res);
      this.dataservice.tableData = res;

      this.router.navigate(['/dashboard']);
    },
      (error) => {
        window.alert("Some thing went wrong.Please try later");
      });
  }
  openDetailDialogBox(rowData: FileGridData) {
    this.openDialog = true;
    this.selectedItemRow = Object.assign(rowData);
  }
  openDeleteDialogBox(rowData: FileGridData) {
    rowData.fileFlag = true;
    this.openDeleteDialog = true;
    this.selectedItemRow = Object.assign(rowData);
  }
  onDialogClose(event) {
    this.openDialog = event;
  }
  onDialogDeleteClose(event) {
    this.openDeleteDialog = event;
  }

  paginate(event) {
    console.log("pageNO" + event.page);
    //event.first = Index of the first record
    this.pageNo=event.page+1;
    console.log("From paginate"+this.totalRecordsCount);
    if(!this.model.flag)
    {this.model=this.dataservice.currentModel;}
    this.model.pageNo=this.pageNo;
    this.advFilterFilePage(this.model);
  }

  advFilterFilePage(model:any) {
    this.spinnerService.show();
    
    
    this._apiService.advFilterFile(model).then(res => {
    
      for (let row in res) {
        if (res[row].ackStatus == null) {
          res[row].ackStatus = 'NEW';
        }
      }
       if (res) {
        this.totalRecordsCount = res[0].countRows;
      //   console.log("count<<"+this.totalRecordsCount);
      }
      this.tableData = res;
      this.allData = this.tableData;
      () => this.spinnerService.hide();
    },

      (error) => {
        window.alert("Please try later");
      },

    );
  }
}