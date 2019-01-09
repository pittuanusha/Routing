import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { Observable, from } from 'rxjs';
import { promise } from 'protractor';
import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeDetailsGuardService{
    // constructor,private router:Router){}
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    //     const employeeExits=!!this.employeeService.grtEmployee(+route.paramMap.get('username'));
    //     if(employeeExits)
    //     {
    //         return true;
    //     }else{
    //         this.router.navigate(['pagenotfound']);
    //         return false;
    //     }

    // }

}