export interface DashboardGridData {

	'payment_id': number;
	'payment_number':number;
    'comments': string;
    'payment_instruction_id': number;
	//payment details
	'supplier_id':number;
	'supplier_name':string;
	'supplier_site_id':number;
	'supplier_site_name':string;
	'payment_method_code':string;
	'payment_status':string;
	'already_exists':string;
	'payment_amount':string;
	'payment_currency_code':string;
	'org_id':number;
	'bank_id':number;
	'bank_account_number':string;
	'bank_account_name':string;
	'bank_branch_name':string;
	'request_id':number;
	'payment_date':string;
	'creation_date':string;
	'created_by':string;
	'last_update_date':string;
	'last_updated_by':number;
	'file_status':string;
	'payflag':boolean;
	//Acknowledgement
	'payment_ack_id':number;
	'ack_status':string;
}

export interface FileGridData {
	'createdDate':string,
	'id': string;
    'orgMsgId': string;
    'orgCreDt': string;
	'orgGroup':string;
	'proposalRun':string;
	'status':string;
	'duplicate':string;
	'incomingMsgType':string;
	'noOfTrasn':number;
	'orgCntrlSum':string;
	'psrMsgId':number;
	'psrAckCreDt':string;
	'pmtGrpStatus':string;
	'addInfo':string;
	'createdBy':string;
	'modifiedBy':string;
	'modifiedDt':string;
	'comments':string;
	'org_id':number;
	'payment_instruction_id':number;
	'ackStatus':String;
	'fileFlag':boolean;
	'countRows':number;
}

export interface InvoiceGridData {
	'payment_id':number;
	'invoice_num':string;
	'invoice_amount':string;
	'invoice_currency_code':string;
	'invoice_date':string;
	'invoice_id':number;
	'created_by':number;
	'creation_date':string;
	'last_update_date':string;
	'last_updated_by':number;
	'org_id':number;
	'payment_method_code':string;
	'request_id':number;
	'supplier_name':string;
	'supplier_site_name':string;

}
export interface HistoryComments {
    'comment_id':number;
	'payment_instruction_id':number;
	'payment_id':number;
 	'comments':string;
	'status':string;
	'created_by':number;
	'creation_date':string;
	'last_update_date':string;
	'last_update_by':number;
	'org_id':number;
	
}

export interface FilterData {
    ouName:string[];
	respId:string;
	userName:string;
	userId:string;
	
	
}

export interface StatusCombo{
	id:number;
	name:string;
	code:string;
}

export interface TableColumns {
    field: string;
    header: string;
    className?: string;
	width: any;
	hasTooltip?: boolean;
	align?: string;
}

export interface Tabs {
    label: String;
    key: number;
}
