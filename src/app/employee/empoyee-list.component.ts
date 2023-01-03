import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from './employee';

@Component({
  selector: 'app-empoyee-list',
  templateUrl: './empoyee-list.component.html',
  styleUrls: ['./empoyee-list.component.css']
})
export class EmpoyeeListComponent implements OnInit{

  emps:Employee[]=[];

  constructor(private service:EmployeeService){}


  ngOnInit(): void {
   this.emps=this.service.getEmployees();
  }

}
