import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  hide=true;

  constructor(private fb:FormBuilder, private authSvc: AuthService, private router: Router) { }

  loginForm= this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });

  ngOnInit(): void {    
    /*
    const data ={username: 'andres@gmail.com', password: '1234'};
      this.authSvc.login(data).subscribe(
        user => {
          console.log(user);
        }, 
      )
   */
      
  }

  async onLoginGoogle(){
    try{
      const res = await this.authSvc.loginGoogle();
      if(res){
        this.router.navigate(['./home']);
      }
    }catch(error){
      console.log(error);
    }
  }

  //imprime los valores por consola
  onLogin(){
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe(
      user => {
        console.log(user);
        if(user){
          this.router.navigate(['./home'])
        }
      }, 
    )
  }

  //Valida los campos del form
  isValidField(field:string):string{
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
