import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  employeees:any[]=[
    {"name":"rama","pwd":"abc"},
    {"name":"sitha","pwd":"abc123"},
    {"name":"rani","pwd":"efg"}
  ]
  empname:string;
  Password:string;
  btnClick() 
  {
    
    // let data={
      
    //   "name":this.empname,
    //   "pwd":this.Password
  
    
    // }
    // this.employeees.push(data);
   // this.newAttribute = {};
    
  this.router.navigateByUrl('/pagenotfound');
  }
}
