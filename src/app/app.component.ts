import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DataService } from './services/dataService';
import { FilterData } from './interfaces/dashboardGrid.interface';
import { EncodedData } from './models/payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuStatus = false;
  paramValue: EncodedData={} as any;
  constructor(private _apiService: ApiService, public dataservice: DataService) {
    
  }
  ngOnInit() {
  /*  const url = window.location.href;

    //  let paramValue:EncodedData;
    let parameters;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      parameters = httpParams.get('ouName');

      //  parameters = atob(paramValue);
      //let toArray = parameters.split("&");
      if (this.paramValue) {
        //this.paramValue.params=parameters;
        this.paramValue.params = parameters;
      }
      this._apiService.getDecryptedValue(this.paramValue).then(res => {
        console.log(res)
        this.dataservice.decodedData = res;
      });
    }*/
  }

  onMenuToggle(event: boolean) {
    this.menuStatus = event;
  }

}
