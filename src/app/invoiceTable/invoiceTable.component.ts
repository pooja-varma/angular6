import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DashboardGridData, InvoiceGridData,TableColumns, Tabs } from '../interfaces/dashboardGrid.interface';
import { TableModel } from './invoiceTable.model';
import { DataService } from '../services/dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'invoice-table',
  templateUrl: './invoiceTable.component.html',
  styleUrls: ['./invoiceTable.component.scss']
})
export class InvoiceTableComponent implements OnInit {
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

  constructor(private _apiService: ApiService, public dataservice: DataService,private router: Router) {

    this.tabList = [
      { label: 'Invoice Details', key: 0 }
    ];

    this.currTab = this.tabList[0].key;

  }

  ngOnInit() {
    
    this.tableData = this.dataservice.tableData;
        this.allData = this.tableData;
    this._tableModel = new TableModel();
    this.columns = this._tableModel.getTableProps();
    this.loading = false;
    //  this.fetchTableData('all');
  }

  
  
  openDialogBox(rowData: InvoiceGridData) {
    this.openDialog = true;
    this.selectedItemRow = Object.assign(rowData);
  }
  
  onDialogClose(event) {
    this.openDialog = event;
  }
  
}