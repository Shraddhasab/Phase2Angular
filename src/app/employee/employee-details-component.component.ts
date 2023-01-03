import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService, Employee } from './employee';

@Component({
  selector: 'app-employee-details-component',
  templateUrl: './employee-details-component.component.html',
  styleUrls: ['./employee-details-component.component.css']
})
export class EmployeeDetailsComponentComponent implements OnInit,OnDestroy{
  id:number=0;
  emp:Employee|undefined;
  subs!:Subscription;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:EmployeeService){}
  

  ngOnInit(): void {
    // we have to get the selected emp object here on this page at the time of its initialise

    this.subs=this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
    let id=params.get('id') ;
      if(id){
        this.id=+id;
      }
      
        this.emp = this.service.getEmployeeById(this.id);
      


    })
    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe;
  }

  back():void{

this.router.navigate(['emps']);
  }



}
