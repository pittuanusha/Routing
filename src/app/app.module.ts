import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule, RoutesRecognized, Routes} from '@angular/router';
  import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes=[
  {path:'home',component:HomeComponent},
  // {path:'home/:username',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'pagenotfound',component:PageNotFoundComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
