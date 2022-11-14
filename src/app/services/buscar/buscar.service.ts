import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Multas, MultasI } from 'src/app/pages/multas/interface/multas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private readonly http: HttpClient) { }

  getxPatente(patente:string):Observable<MultasI[]>{
    return this.http.get<MultasI[]>(`${environment.multas}/${patente}`).pipe(
     map(res => res) 
    )
  }
}
