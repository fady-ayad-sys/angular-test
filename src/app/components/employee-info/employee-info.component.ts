import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss'],
  providers: [DataService]
})
export class EmployeeInfoComponent implements OnInit, OnChanges{

  employees: any[]  = [];

  constructor(private dservice: DataService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }
  ngOnInit(): void {
    //this.getEmployeesFromService();
  }

  getEmployeesFromService(): void {
    this.employees = this.dservice.getEmployees();
  }

  getEmptyArrayFromService(): void {
    this.employees = this.dservice.getEmptyArray();
  }

  

}
