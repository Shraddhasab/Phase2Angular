import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


export class Country{
  id!:string;
  name!:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  countries: Country[]=[
    new Country("1","India"),
    new Country("2","Japan"),
    new Country("3","Russia")
  ];

  ngOnInit(): void {
     
  }

  onSubmit(data:NgForm){
    if(data.invalid){
      console.log("Invalid");
      return;
    }
 
    console.log((data.value));
    

  }

}
