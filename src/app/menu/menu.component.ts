import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();
  selectedItem:any;
  isMenuOpen = false;
  menuList: Array<{ label: string, icon: string, routerLink:string ,routerLinkActive: string}>;

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.menuList = [
      { label: 'Advance Filter', icon: 'fa-filter', routerLink: "/advFilter" ,routerLinkActive:"active" },
      { label: 'File Details', icon: 'fa-table', routerLink: "/dashboardFile", routerLinkActive:"active" }
     /* { label: 'Payment Details', icon: 'fa-table', routerLink: "/dashboard", routerLinkActive:"active" }*/
      
      // { label: 'Self Service Utility', icon: 'fa-cog' }
    ];
    this.menuToggle.emit(this.isMenuOpen);
  }

  onMenuToggle() {
  this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }


  listClick(event, newValue) {
    
    this.selectedItem = newValue.label;  // don't forget to update the model here
    // ... do other stuff here ...

    //this.dataservice.headingData = this.selectedItem;

    this.dataservice.changeMessage(this.selectedItem);
    console.log(this.selectedItem);
}
}
