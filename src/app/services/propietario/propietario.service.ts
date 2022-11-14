import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { VehiculosI } from 'src/app/interfaces/vehiculo';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http: HttpClient) { }

  getVehicules(rut:string):Observable<VehiculosI[]>{
    return this.http.get<VehiculosI[]>(`${environment.vehiculos}${rut}`).pipe(
      map(vehiculos => vehiculos)
    );
  }
}
