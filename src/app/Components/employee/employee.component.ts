import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../../config/config.service';
import { IEmployee } from 'src/app/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public employees:IEmployee[]=[];
  constructor(private _employeeService: ConfigService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe((data:IEmployee[])=>this.employees=data)
  }

}
