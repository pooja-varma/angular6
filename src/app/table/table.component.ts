import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { DashboardGridData, TableColumns, Tabs, FileGridData } from './../interfaces/dashboardGrid.interface';
import { TableModel } from './table.model';
import { DataService } from '../services/dataService';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  loading : boolean;
  tabList: Array<Tabs>;
  currTab: number;
  columns: Array<TableColumns>;
  tableData: Array<DashboardGridData>;
  allData: Array<DashboardGridData>;
  noOfRowToDisplay = 10;
  openDialog: boolean;
  openDeleteDialog:boolean;
  selectedItemRow: DashboardGridData;

  private _tableModel: TableModel;

  constructor(private _apiService: ApiService, public dataservice: DataService,private router: Router,private spinnerService: Ng4LoadingSpinnerService) {

    this.tabList = [
      { label: 'All Payments', key: 0 },
      { label: 'Accepted', key: 1 },
      { label: 'Pending', key: 2 },
      { label: 'Rejected', key: 3 }
    ];

    this.currTab = this.tabList[0].key;

  }

  ngOnInit() {
    
    this.tableData = this.dataservice.tableData;
    this.allData = this.tableData;
    this._tableModel = new TableModel();
    this.columns = this._tableModel.getTableProps();
    this.loading = false;
    this.dataservice.changeMessage("Payment Details");
    //  this.fetchTableData('all');
  }

  fetchTableData(status): void {
    this._apiService.getTableData(status).then(res => {

      for (let row in res) {
        console.log("<<<<<" + res); // "species"
        if (res[row].payment_status == "RJCT")
          res[row].payment_status = 'REJECTED';
        else if (res[row].payment_status == "ACCP")
          res[row].payment_status = 'ACCEPTED';
        else if (res[row].payment_status == "PDNG")
          res[row].payment_status = 'PENDING';
        console.log(res[row].payment_status);
      }
      this.tableData = res;
    }
    ,
      (error)=>{
        window.alert("Please try later");
      });
  }

  selectTab(tab: Tabs): void {
    this.currTab = tab.key;
    this.tableData = this.allData;
    if (this.currTab == 0 && this.tableData != null) {
      // need to write logic to change data wrt the selected tab
      // this.fetchTableData('all');
      //this.tableData = this.tableData.filter(rowdata => rowdata.status === 'all');
      this.tableData = this.allData;
    }
    else if (this.currTab == 1 && this.tableData != null) {
      //this.fetchTableData('ACCP');
      this.tableData = this.tableData.filter(rowdata => rowdata.ack_status === 'ACCP' ||rowdata.ack_status === 'ACSP' );
    }
    else if (this.currTab == 2 && this.tableData != null) {
      //this.fetchTableData('PDNG');
      this.tableData = this.tableData.filter(rowdata => rowdata.ack_status === 'PDNG');
    }
    else if (this.currTab == 3 && this.tableData != null) {
          //this.fetchTableData('RJCT');
      this.tableData = this.tableData.filter(rowdata => rowdata.ack_status === 'RJCT');
    }
  }

  openDialogBox(rowData: DashboardGridData) {
   // this.openDialog = true;
   // this.selectedItemRow = Object.assign(rowData);


   this.spinnerService.show();
    this._apiService.invoiceDetails(rowData).then(res => {
      console.log(rowData);
      console.log(res);
      this.dataservice.tableData = res;
      this.spinnerService.hide();
      this.router.navigate(['/invoiceDetails']);

    },
      (error)=>{
        window.alert("Please try later");
      });
  }
  openDetailDialogBox(rowData: FileGridData) {
    this.openDialog = true;
    this.selectedItemRow = Object.assign(rowData);
}
  openDeleteDialogBox(rowData: DashboardGridData) {
    rowData.payflag=true;
    this.openDeleteDialog = true;
    this.selectedItemRow = Object.assign(rowData);
  }
  onDialogClose(event) {
    this.openDialog = event;
  }
  onDialogDeleteClose(event) {
    this.openDeleteDialog = event;
  }
  
}