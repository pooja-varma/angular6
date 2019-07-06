import { TableColumns } from '../interfaces/dashboardGrid.interface';

export class TableModel {
    getTableProps(): Array<TableColumns> {
        const cols: Array<TableColumns> = [
            {
                header: 'Batch#',
                field: 'payment_instruction_id',
                className:'unwrap-content', 
                width: '15%',
                align: 'left'
            },
            
            {
                header: 'Payment Date',
                field: 'createdDate',
                className: 'unwrap-content',
                width: '10%',
                align: 'left'

            },
            // {
            //     header: 'RunDate',
            //     field: 'createdDate',
            //     className: 'unwrap-content',
            //     width: '18%',
            // },
            // {
            //     header: 'Original Message Id',
            //     field: 'orgMsgId',
            //     className: 'unwrap-content',
            //     width: '12%'
            // },
            
            // {
            //     header: 'Origin',
            //     field: 'orgGroup',
            //     className: 'unwrap-content',
            //     width: '8%'
            // },
            // {
            //     header: 'payment Status',
            //     field: 'status',
            //     className: 'unwrap-content',
            //     width: '8%'
            // },
            // {
            //     header: 'Incoming Msg Type',
            //     field: 'incomingMsgType',
            //     className: 'unwrap-content',
            //     width: '8%'
            // },
            {
                header: 'No of Transactions',
                field: 'noOfTrasn',
                className: 'unwrap-content',
                width: '15%',
                align: 'left'
            },
            {/*change to payment amount*/
                header: 'Payment Total',
                field: 'orgCntrlSum',
                className: 'unwrap-content',
                width: '15%',
                align: 'right'
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
                field: 'ackStatus',
                className: 'unwrap-content',
                width: '15%',
                align: 'left'
                //hasTooltip: true
            },
            // {
            //     header: 'Comment',
            //     field: 'comments',
            //     className: 'unwrap-content',
            //     width: '30%',
            //     hasTooltip: true
            // }

            {
                header: 'Ack. Last Updated Date',
                field: 'modifiedDt',
                className: 'unwrap-content',
                width: '25%',
                align: 'left'
            },
        ];
        return cols;
    }
}
