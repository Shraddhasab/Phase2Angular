import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-reactive',
  templateUrl: './employee-reactive.component.html',
  styleUrls: ['./employee-reactive.component.css']
})
export class EmployeeReactiveComponent implements OnInit{
  empForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }

  ngOnInit(): void {

this.empForm = this.formBuilder.group({
    employees:this.formBuilder.array([])
    });
    
  }

  employees():FormArray{
    return this.empForm.get("employees") as FormArray;
  }

  newEmployee():FormGroup{
    return this.formBuilder.group({
         firstName:'',
         lastName:'',
         skills:this.formBuilder.array([])
    });

  }

  addEmployee(){
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex:number){
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex:number):FormArray{
    return this.employees().at(empIndex).get("skills") as FormArray;
  }


newSkill():FormGroup{
  return this.formBuilder.group({
    skill:'',
    exp:''
  });
}
  addEmployeeSkill(empIndex:number){
    this.employeeSkills(empIndex).push(this.newSkill());


}
removeEmployeeSkill(empIndex:number,skillIndex:number){
  this.employeeSkills(empIndex).removeAt(skillIndex);
}

onSubmit(){
  console.log(this.empForm.value);
  
}
}

  

