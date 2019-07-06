import { TableColumns } from '../interfaces/dashboardGrid.interface';

export class TableModel {
    getTableProps(): Array<TableColumns> {
        const cols: Array<TableColumns> = [
            {
                header: 'Payment#',
                field: 'payment_number',
                className: 'unwrap-content',
                width: '8%',
                align: 'left'
            },
            {
                header: 'Creditor Name',
                field: 'supplier_name',
                className: 'unwrap-content',
                width: '12%',
                align: 'left'
            },
            {
                header: 'Amount',
                field: 'payment_amount',
                className: 'unwrap-content',
                width: '8%',
                align: 'right'
            },
            {
                header: 'Currency',
                field: 'payment_currency_code',
                className: 'unwrap-content',
                width: '8%',
                align: 'right'
            },
            // {
            //     header: 'Status',
            //     field: 'payment_status',
            //     className: 'unwrap-content',
            //     width: '8%'
            // },

            {
                header: 'Payment Method',
                field: 'payment_method_code',
                className: 'unwrap-content',
                width: '20%',
                align: 'center'
            },

            {
                header: 'File Name',
                field: 'file_name',
                className: 'unwrap-content',
                width: '10%',
                align: 'left'
            },
            {
                header: 'Ack. Status',
                field: 'ack_status',
                className: 'unwrap-content',
                width: '12%',
                hasTooltip: true,
                align: 'left'
            },
            {
                header: 'Ack. Last Updated Date',
                field: 'last_update_date',
                className: 'unwrap-content',
                width: '30%',
                align: 'left'
            },

        ];
        return cols;
    }
}
