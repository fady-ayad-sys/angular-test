import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employees: any[] = [
    {name: 'john mathew', code: 'ERSDF', email: 'john@mail.com'},
    {name: 'ronnie coleman', code: 'GFDHE', email: 'ronnie@mail.com'},
    {name: 'chris', code: 'CFJGT', email: 'chris@mail.com'},
  ]


  getEmployees(): any[] {
    return this.employees;
  }

  constructor() { }
}
