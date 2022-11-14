import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, VehiculoI } from 'src/app/interfaces/vehiculo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  
  constructor(private http:HttpClient) { }

  getVehiculo(patente:string):Observable<VehiculoI>{
    return this.http.get<VehiculoI>(environment.vehiculo+patente).pipe(
      map(res => res)
    )
  }
}
