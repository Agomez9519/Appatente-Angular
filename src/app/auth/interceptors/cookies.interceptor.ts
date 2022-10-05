import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';

@Injectable()
export class CookiesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')?.toString();
    console.log(token);
    if(token){
       req = req.clone({
        headers: req.headers.set('token', token)         
      });    

      return next.handle(req).pipe(
        catchError(this.handlerError)
      )
                    
  }
    return next.handle(req).pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(error: HttpErrorResponse){
    switch (error.status) {
      case 401:
          console.log('No autorizado');
        break;

        case 200:
          console.log('Login exitoso');
        break;

        case 201:
          console.log('Usuario Creado');
        break;

        case 452:
          alert('Usuario o contraseña incorrecta');
        break;

        case 409:
          console.log('User y Password son requeridos');
        break;

        case 404:
          console.log('Error: articulo no encontrado');
        break;

        case 409:
          console.log('El tipo de propietario ya existe');
        break;

        case 410:
          console.log('El tipo de vehiculo ya existe');
        break;

        case 500:
          console.log('Error al traer los tipos de propietarios');
        break;

        case 501:
          console.log('Error al crear el usuario"');
        break;
    
      default:
          console.log('Default');
        break;
    }

    return throwError(error)
    
  }

}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CookiesInterceptor,
  multi: true

}