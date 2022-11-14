import { Component, OnInit } from '@angular/core';
import { VehiculosI } from 'src/app/interfaces/vehiculo';
//import { VehiculosI } from 'src/app/interfaces/vehiculo';
import { PropietarioService } from 'src/app/services/propietario/propietario.service';
import { validateRUT, getCheckDigit, generateRandomRUT } from 'validar-rut'

@Component({
  selector: 'app-allcarsxrut',
  templateUrl: './allcarsxrut.component.html',
  styleUrls: ['./allcarsxrut.component.scss']
})
export class AllcarsxrutComponent implements OnInit {

  rut:string;

  vehiculos:VehiculosI[];

  constructor(private propietarioSvc: PropietarioService) { }

  ngOnInit(): void {
  }

  getVehiculos(rut:string){
    if(validateRUT(rut)){
    this.propietarioSvc.getVehicules(rut).subscribe( res => {
      this.vehiculos = res;
      console.log(res)
    })
  }else{
    alert('RUT invalido');
  }
  }

}
