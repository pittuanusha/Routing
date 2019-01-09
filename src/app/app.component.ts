import { Component } from '@angular/core';
import { pureFunction1 } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',//
//   template: `<div><h1>{{getF1()}}
//   <app-employee></app-employee></h1>
//  <img [src]='imagepath'/></div>`,
template:`<div>
<ul class="nav nav-tabs">
<li><a routerLink="home">Home</a></li>
<li><a routerLink="employee">Employee</a></li>
</ul>
<router-outlet></router-outlet>
</div>`

  
  // styleUrls: ['./app.component.css']
})
export class AppComponent 
{
 
  imagepath:string='https://pcbonlineshop.com/photos/product/4/176/4.jpg'

  firstname:string="welcome to"
  lastname:string="angular 2"
  getF1():string
  {
return this.firstname+' '+this.lastname;

  }
  

}

