import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DashboardGridData } from '../interfaces/dashboardGrid.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show = false;
  @Input() modalData: any;
  @Input() modalFileData:any;
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
