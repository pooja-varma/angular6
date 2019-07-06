import { TableColumns } from '../interfaces/dashboardGrid.interface';

export class TableModel {
    getTableProps(): Array<TableColumns> {
        const cols: Array<TableColumns> = [
            {
                header: 'Payment Id',
                field: 'payment_id',
                className: 'unwrap-content',
                width: '18%',
                
            },
            {
                header: 'Invoice No',
                field: 'invoice_num',
                className:'unwrap-content', 
                width: '15%'
            },
            {
                header: 'Invoice Amt',
                field: 'invoice_amount',
                className: 'unwrap-content',
                width: '12%'
            },
            {
                header: 'Currency code',
                field: 'invoice_currency_code',
                className: 'unwrap-content',
                width: '8%'
            },
            {
                header: 'Date',
                field: 'invoice_date',
                className: 'unwrap-content',
                width: '8%'
            },
            {
                header: 'Created By',
                field: 'created_by',
                className: 'unwrap-content',
                width: '8%'
            },
            // {
            //     header: 'Org Id',
            //     field: 'org_id',
            //     className: 'unwrap-content',
            //     width: '30%',
            //     hasTooltip: true
            // },
            {
                header: 'Supplier',
                field: 'supplier_name',
                className: 'unwrap-content',
                width: '12%'
            }
        ];
        return cols;
    }
}
