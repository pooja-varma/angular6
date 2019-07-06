import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DashboardGridData } from '../interfaces/dashboardGrid.interface';

@Component({
  selector: 'invoice-modal',
  templateUrl: './invoiceModal.component.html',
  styleUrls: ['./invoiceModal.component.scss']
})
export class InvoiceModalComponent implements OnInit {

  @Input() show = false;
  @Input() modalData: any;
  @Output() displayChange = new EventEmitter();

  onClose(){
    this.displayChange.emit(false);
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
  constructor() { }

  ngOnInit() {
  }
}
