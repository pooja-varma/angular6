import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { DashboardGridData,FileGridData } from '../interfaces/dashboardGrid.interface';

import { Payment, EncodedData } from '../models/payment';
import { environment } from '../../environments/environment';

declare var require: any;
declare var moment: any;
const mockTableData = require('../../assets/mock/dashboard.json');
const paymentdtls=require('../../assets/mock/paymentdtls.json');

const invoicedtls=require('../../assets/mock/invoice.json');

const API_URL = environment.apiUrl;
var paymentDetails="http://localhost:8888/paymentDetailbyStatus";
//var paymentStatUrl = 'http://localhost:8888/paymentDetailCount';
//var paymentAdvFilterFile= "http://localhost:8888/advFilterFile";
var paymentAdvFilter= "http://localhost:8888/advFilter";
var paymentAdvFilterFile= "http://localhost:8888/advFilterFilePage";
var fileDelComment= "http://localhost:8888/fileDelComment";
var pmtDelComment= "http://localhost:8888/pmtDelComment";
var filePaymentDtls="http://localhost:8888/filePaymentDtls";
var invoiceDtls="http://localhost:8888/invoiceDtls";
var pmtCmtHistory="http://localhost:8888/pmtCommentHistory";
var fileCmtHistory="http://localhost:8888/fileCommentHistory";
//var decryptParams='http://localhost:8888/decryptParams';

/*
var paymentDetails= API_URL + 'paymentDetailbyStatus';
//var paymentStatUrl = API_URL + 'paymentDetailCount';
var paymentAdvFilterFile= API_URL + 'advFilterFile';
var paymentAdvFilter= API_URL + 'advFilter';
var fileDelComment= API_URL + 'fileDelComment';
var pmtDelComment= API_URL + 'pmtDelComment';
var filePaymentDtls= API_URL + 'filePaymentDtls';
var invoiceDtls= API_URL + 'invoiceDtls';
var pmtCmtHistory=API_URL + 'pmtCommentHistory';
var fileCmtHistory=API_URL + 'fileCommentHistory';
var decryptParams=API_URL + 'decryptParams';

*/
export class PaymentStatus {
  status: any ;
  cnt: any ;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  _isMock = false;
  constructor(private _http: HttpService) { }


  getPmtCmtHistory(rowPaymentValues: DashboardGridData): any {
    return this._http.postReq(pmtCmtHistory,rowPaymentValues); 
  }
  getFileCmtHistory(rowFileValues: FileGridData): any {
    return this._http.postReq(fileCmtHistory,rowFileValues); 
  }getReq

/*getDecryptedValue(paramValues:EncodedData){
  return this._http.postReq(decryptParams,paramValues); 
}*/

  getTableData(str): Promise<Array<DashboardGridData>> {
    if (this._isMock) {
      const modData = mockTableData.map(data => {
        data.updated_at = moment(data.updated_at).format('DD/MM/YYYY');
        return data;
      });
      return Promise.resolve(modData);
    } else {
      // need to add url for api
      return this._http.getReq(paymentDetails,{ status: str });
    }
  }
  
  invoiceDetails(dashboardGridData: DashboardGridData) {
   // this._isMock = true;
    if (this._isMock) {
      const modData = invoicedtls.map(data => {
        data.updated_at = moment(data.updated_at).format('DD/MM/YYYY');
        return data;
      });
      return Promise.resolve(modData);
    } else {
    return this._http.postReq(invoiceDtls,dashboardGridData);  
    }
  }

  filePaymentDetails(fileGridData: FileGridData) {
    //this._isMock = true;
    if (this._isMock) {
      const modData = paymentdtls.map(data => {
        data.updated_at = moment(data.updated_at).format('DD/MM/YYYY');
        return data;
      });
      return Promise.resolve(modData);
    } else {
    return this._http.postReq(filePaymentDtls,fileGridData);  
    }
  }


  getTableDataFile(str): Promise<Array<FileGridData>> {
    if (this._isMock) {
      const modData = mockTableData.map(data => {
        data.updated_at = moment(data.updated_at).format('DD/MM/YYYY');
        return data;
      });
      return Promise.resolve(modData);
    } else {
      // need to add url for api
      return this._http.getReq(paymentDetails,{ status: str });
    }
  }

  setFileDelComment(fileGridData: FileGridData) {
    return this._http.postReq(fileDelComment,fileGridData);  
  }
  
  setPmtDelComment(dashboardGridData: DashboardGridData) {
    return this._http.postReq(pmtDelComment,dashboardGridData);  
  }

  // getPaymentStat() : Promise<PaymentStatus[]> {
  //   //return this._http.getReq(paymentStatUrl);
  // }

  advFilter(payment: Payment) {
    return this._http.postReq(paymentAdvFilter,payment);  
  }

  advFilterFile(payment: Payment) {
    return this._http.postReq(paymentAdvFilterFile,payment);  
  }
}
