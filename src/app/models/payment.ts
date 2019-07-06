import { StatusCombo } from "../interfaces/dashboardGrid.interface";

export class Payment {
    
    pmtfromDate: Date;
    pmttoDate: Date;
    fromDate: Date;
    toDate: Date;
    identification: string;
    pmtGpSts: string;
    houseBk: string;
    accId: string;
    payingCmpCode: string;
    sendingCmpCode: string;
    busiPartRef: string;
    pmtMethod: string;
    pmtMtSupp: string;
    orgName:StatusCombo;
	pmtselectedStatus:StatusCombo;
    selectedStatus:StatusCombo;
    selectedOrgname:StatusCombo;
    pmtselectedOrgname:StatusCombo;
    pageNo:number;
    flag:boolean;
    
}
export class  EncodedData{
	params:string;
}