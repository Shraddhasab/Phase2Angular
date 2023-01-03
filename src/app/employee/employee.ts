import { Injectable } from "@angular/core";

export class Employee{
    id:number;
    name:string;
    dept:string;
    sal:number;

    constructor(id:number,name:string,dept:string,sal:number){
        this.id=id;
        this.name=name;
        this.dept=dept;
        this.sal=sal;
    }
}

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    public getEmployees(){
        let emps:Employee[];
        emps=[
            new Employee(1,'Vanshika','FSE',12345),
            new Employee(2,'Vatsala','EFS',12345),
            new Employee(3,'Nidhi','JFS',12345),

        ]

        return emps;


    }


    getEmployeeById(id:number){
        let emps:Employee[]=this.getEmployees();
        return emps.find(e=>e.id==id);
    }

}
