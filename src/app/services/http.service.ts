import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getReq(url: string, data?: any): Promise<any> {
    // const obj = reqObj(url, { method: "GET" });
    return this.http.get(url, { params: data }).toPromise();
  }

  postReq(url: string, data: any): Promise<any> {
    return this.http.post(url, data).toPromise();
  }

  putReq(url: string, data: any): Promise<any> {
    return this.http.put(url, data).toPromise();
  }

  deleteReq(url: string, data?: any): Promise<any> {
    return this.http.delete(url, { params: data }).toPromise();
  }
}
