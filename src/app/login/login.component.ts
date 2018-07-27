import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formData:any={};
  constructor(public local:LocalStorageService,private router: Router) { }

  ngOnInit() {
    // Check Authotication 
    if(this.local.get('auth')!=null && this.local.get('auth')=='done'){
      this.router.navigate(['/dashboard']);
    }
  }
  
  
  login(): any{
    if(this.formData.email=='admin@angular.com' && this.formData.password==123456){
      this.local.set('auth', 'done');
      this.router.navigate(['/dashboard']);
    }
  }
 
}
