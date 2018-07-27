import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public local:LocalStorageService,private router: Router) { }

  ngOnInit() {
    // Check Authotication
    if(this.local.get('auth')==null && this.local.get('auth')!='done'){
      this.router.navigate(['/login']);
    }
  }
  
  signOut():any{
    this.local.remove('auth');
    this.router.navigate(['/login']);
  }
}
