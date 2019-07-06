import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableFileComponent } from './tableFile/tableFile.component';
import { AdvFilterPanelComponent } from './adv-filter-panel/adv-filter-panel.component';
import { InvoiceTableComponent } from './invoiceTable/invoiceTable.component'
export const routes: Routes = [
    { path: 'dashboard', component: TableComponent },
    { path: 'dashboardFile', component: TableFileComponent },
    { path: 'advFilter', component: AdvFilterPanelComponent },
    { path: 'invoiceDetails', component: InvoiceTableComponent },
    { path: '', redirectTo: '/dashboardFile', pathMatch: 'full' }


];