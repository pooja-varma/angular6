import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardGridData, FileGridData, HistoryComments } from '../interfaces/dashboardGrid.interface';
import { ApiService } from './../services/api.service';
import { DataService } from '../services/dataService';
export interface CmtHistory {
  created_by: number;
  comments: string;
}
@Component({
  selector: 'app-confirmModal',
  templateUrl: './ConfirmModal.component.html',
  styleUrls: ['./ConfirmModal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() show = false;
  @Input() confirmModalData: any;
  rowFileValues: FileGridData;
  rowPaymentValues: DashboardGridData;
  historyComment: HistoryComments;
  present: boolean;
  commentText: any;
  cmtsHistory: CmtHistory[] = [];

  @Output() displayChange = new EventEmitter();

  onClose() {
    this.displayChange.emit(false);
    this.commentText = '';
    this.cmtsHistory = [];
  }

  onOpen(selectedRow) {
    console.log(selectedRow);
    if (selectedRow.fileFlag) {
      this.rowFileValues = selectedRow;
      this._apiService.getFileCmtHistory(this.rowFileValues).then(res => {
        this.historyComment = res;
        this.cmtsHistory = [];
        for (let row in res) {
          this.cmtsHistory.push({ created_by: res[row].created_by, comments: res[row].comments });
        }

      },
        (error) => {
          window.alert("Please try later");
        });
      //this.onClose();
    }
    if (selectedRow.payflag) {
      this.rowPaymentValues = selectedRow;
      this._apiService.getPmtCmtHistory(this.rowPaymentValues).then(res => {
        this.historyComment = res
        this.cmtsHistory = [];
        for (let row in res) {
          this.cmtsHistory.push({ created_by: res[row].created_by, comments: res[row].comments });
        }
      }
        ,
        (error) => {
          window.alert("Please try later");
        });

      // this.onClose();
    }
  }
  constructor(private _apiService: ApiService, public dataservice: DataService) {
    //   this.commentText=this.confirmModalData.comments;


  }
  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  ngOnInit() {


  }


  delete(selectedRow) {
    console.log(selectedRow);

    if (selectedRow.fileFlag) {
      this.rowFileValues = selectedRow;
      if (this.confirmModalData) {
        this.rowFileValues.comments = this.commentText;
        this.rowFileValues.createdBy = this.dataservice.decodedData.userId;
      }
      this._apiService.setFileDelComment(this.rowFileValues).then(res => {
      });
      this.onClose();
    } if (selectedRow.payflag) {
      this.rowPaymentValues = selectedRow;
      if (this.confirmModalData) {
        this.rowPaymentValues.comments = this.commentText;
        this.rowPaymentValues.created_by = this.dataservice.decodedData.userId;
      }
      this._apiService.setPmtDelComment(this.rowPaymentValues).then(res => {

      });
      this.onClose();
    }
  }

  cancel() {
    this.onClose();
  }
}
