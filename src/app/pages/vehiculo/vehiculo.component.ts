import { Component, OnInit } from '@angular/core';
import {  Propietario, VehiculoI } from 'src/app/interfaces/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  patente:'';

  vehiculo: VehiculoI;
  propietarios: Propietario[] = [];
  cantProp: number ;

  constructor(private vehiculoSvc: VehiculosService) { }

  ngOnInit(): void {
  }

  getVehiculo(patente:string){
    this.vehiculoSvc.getVehiculo(patente).subscribe( res => {
      if(res==null ){
        alert('No se encontro el vehculo con la patente ingresada');
      }else{
        console.log(res);
        this.vehiculo = res;
        this.propietarios = res.propietarios;
        this.cantProp = this.propietarios.length;

      }   
      });
  }

  /*
  getVehiculo(patente:string){
    this.vehiculoSvc.getVehiculos(patente).subscribe( res => {
      if(res==null ){
        alert('No se encontro el vehculo con la patente ingresada');
      }else{
        this.vehiculos = res.vehiculos;
        console.log(res)
      }   
    })
  }*/
  

}
