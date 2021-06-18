import { Injectable } from '@angular/core';
import  Employee  from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSrivice {
employees:Employee[] = [
  {
    id: 1,
    name:"hyderabad",
    email:"9946",
    phone: 7842317191,
    image:'assets/house1.jpg'
    
  },
  {
    id: 2,
    name:"hyderabad",
    email:"7809",
    phone: 876890990,
    image:'assets/house2.jpeg'
  },
  {
    id: 2,
    name:"nizamabad",
    email:"503001",
    phone: 984853459,
    image:'assets/house3.jpeg'
  },
  {
    id: 2,
    name:"hyderabad",
    email:"00765",
    phone: 222222222,
    image:'assets/house3.jpeg'
  },
  {
    id: 2,
    name:"nizamabad",
    email:"503002",
    phone: 3333333333,
    image:'assets/house4.jpeg'
  },
  {
    id: 2,
    name:"vizag",
    email:"50887",
    phone: 8989898989,
    image:'assets/house5.jpeg'
  }

];
constructor() { }
onGet(){
  return this.employees;
}

onAdd(employee:Employee){
  let empl = this.employees.find(x=>x.id==employee.id);
  let indd = null;
  this.employees.forEach((val,ind)=>{
    if(val.id==employee.id){
      indd = ind;
    }
  })
  console.log(empl);
  if(empl&&(indd!=null)){
    // let index = this.employees.indexOf(employee); 
    this.employees[indd].name = employee.name;
    this.employees[indd].phone = employee.phone;
    this.employees[indd].email = employee.email;
  }else{

    this.employees.push(employee);
    console.log(this.employees)
  }
}
onDelete(id: number){
  let employee = this.employees.find(x=>x.id===id);
  let index = this.employees.indexOf(employee,0);
  this.employees.splice(index,1);
}
}
