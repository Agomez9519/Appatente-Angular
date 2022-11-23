import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public isLoged= this.authSvc.isLogged;

  //importo el email desde el localStorage  
  email:string = "Bienvenido: " + localStorage.getItem('email');

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    
  }

  onToggleSidenav(){
    this.toggleSidenav.emit();
  }

  onLogout(){
    this.authSvc.logout();  
  }

}
