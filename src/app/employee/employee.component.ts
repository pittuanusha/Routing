import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  newname:string;
  columnSpan:number=2;
empno:number;
empname:string='rama';
password:string;
private newAttribute: any = {};
employeees:any[]=[
  {"no":111,"name":"rama","pwd":"abc"},
  {"no":222,"name":"sitha","pwd":"abc123"},
  {"no":333,"name":"rani","pwd":"efg"},
]


showDetails:boolean=false;
addFieldValue() 
{
  
  let data={
    "no":this.empno,
    "name":this.newname,
    "pwd":this.password

  
  }
  this.employeees.push(data);
 // this.newAttribute = {};
  
 let datas={
      
    "name":this.empname,
    "pwd":this.password

  
  }
  this.employeees.push(datas);
 this.newAttribute = {};

  
}

deleteFieldValue(index)
{
  this.employeees.splice(index,1);
}
btnLogin()
{
this.router.navigateByUrl('/home')
}
}
