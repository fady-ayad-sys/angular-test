import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss'],
  providers: [DataService]
})
export class EmployeeInfoComponent implements OnInit{

  employees: any[]  = [];

  constructor(private dstervice: DataService) {

  }
  ngOnInit(): void {
    //this.getEmployeesFromService();
  }

  getEmployeesFromService(): void {
    this.employees = this.dstervice.getEmployees();
  }

  

}
