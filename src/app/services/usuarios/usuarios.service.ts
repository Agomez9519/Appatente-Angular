import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserI, UserResponseI } from 'src/app/auth/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private readonly http: HttpClient) { }

  getUsuarios():Observable<UserI[]>{
    return this.http.get<UserI[]>(environment.baseUrl+'user');
  }

  delete(username:string):Observable<UserResponseI | void>{
    return this.http.delete<UserResponseI | void>(`${environment.baseUrl}user/${username}`).pipe(
      map((res: UserResponseI) =>{
        return res;
      })
    );
  }

  update(user:UserI,username:string):Observable<UserResponseI | void>{
    return this.http.patch<UserResponseI | void>(`${environment.baseUrl}user/${username}`,user).pipe(
      map((res: UserResponseI) =>{
        return res;
      })
    );
  }
  
  crearUsuario(data: any):Observable<object>{
    return this.http.post(environment.createUser,data);
  }

}

