import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserI, UserResponseI } from '../interfaces/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn= new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { 
    this.checkToken().subscribe();
  }

  //Retorna un observable con el estado del usuario(logueado o no)
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  private readonly TOKEN = 'token';

  login(user: UserI):Observable<UserResponseI | void> {
    return this.http.post<UserResponseI>(environment.baseUrl+'auth/login', user).pipe(
      map((user: UserResponseI) =>{
        this.saveToken(user);
        this.loggedIn.next(true);
        this.saveEmail();
        return user;
      }
    ))
  }

  //Guarda el token en el localStorage()
  private saveToken(user:UserResponseI){
    const { message,...rest} = user;  
    localStorage.setItem(this.TOKEN, JSON.stringify(rest.token).replace(/['"]+/g, ''));	
    localStorage.setItem('user', JSON.stringify(rest));
  }

  //Desloguea al usuario , borra las localStorage y lo reenvia al login
  logout():void{
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    this.loggedIn.next(false);

    //LoggedInnext(false)
    this.router.navigate(['./login']);
  }

  checkToken():Observable<boolean>{
    const token = localStorage.getItem(this.TOKEN);
    const helper = new JwtHelperService();
    if(!token){
      this.logout()
      return new Observable<boolean>();
    }
     const isExpired = helper.isTokenExpired(token);
    if (isExpired) {
      this.logout();
      return new Observable<boolean>();
    }
    
    this.loggedIn.next(true);
    return new Observable<boolean>();
    
  }

  //Guarda el email en el localStorage, decodificando el token y obteniendo el email sin signos
  saveEmail(){
    const helper = new JwtHelperService();
    const token = localStorage.getItem(this.TOKEN);
    const decodedToken = helper.decodeToken(localStorage.getItem(this.TOKEN ));
    localStorage.setItem('email', JSON.stringify(decodedToken.username).replace(/['"]+/g, ''));
  }

  
}
