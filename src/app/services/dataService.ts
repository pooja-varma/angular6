
import { DashboardGridData, FilterData } from '../interfaces/dashboardGrid.interface';
import { FileGridData } from '../interfaces/dashboardGrid.interface';
import {BehaviorSubject} from 'rxjs';
export class DataService {
  public  tableData: Array<DashboardGridData>;
  public  tableDataFile: Array<FileGridData>;
  public decodedData: FilterData;
  //public headingData: string;
  public noofRecords: number;
  public currentModel: any = {};

  private messsageSource=new BehaviorSubject('File Based Details');
  headingData=this.messsageSource.asObservable();
  
  constructor(){}

  changeMessage(message:string){
    this.messsageSource.next(message)
  }
}