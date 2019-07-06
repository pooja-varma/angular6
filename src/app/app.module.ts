import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { InvoiceTableComponent } from './invoiceTable/invoiceTable.component';
import {TableFileComponent} from './tableFile/tableFile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { CommandPaletComponent } from './command-palet/command-palet.component';
import { ModalComponent } from './modal/modal.component';
import {ConfirmModalComponent} from './confirmModal/ConfirmModal.component'

import {ToastModule} from 'primeng/toast';

import {
  MessageModule,KeyFilterModule
  } from 'primeng/primeng';
import { routes } from './app.route';
//import { AdvFilterComponent } from './adv-filter/adv-filter.component';
import { AdvFilterPanelComponent } from './adv-filter-panel/adv-filter-panel.component';
import { DataService } from './services/dataService';
import { from } from 'rxjs';
import { InvoiceModalComponent } from './invoiceModal/invoiceModal.component';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TableComponent,
    TableFileComponent,
    InvoiceTableComponent, 
    CommandPaletComponent,
    ModalComponent,
    AdvFilterPanelComponent,
    ConfirmModalComponent,
    InvoiceModalComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    MessageModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TableModule,
    TooltipModule,
    KeyFilterModule,
    DialogModule,
    PanelModule,
    CalendarModule,
    InputTextModule,
    FormsModule, 
    ReactiveFormsModule,
    PaginatorModule,
    FieldsetModule,
    RadioButtonModule,
    CardModule,
    TabViewModule,
    DropdownModule,
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [
    HttpService,
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
