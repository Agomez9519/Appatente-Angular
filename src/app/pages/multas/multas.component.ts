import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuscarService } from 'src/app/services/buscar/buscar.service';
import { Multas, MultasI } from './interface/multas';

@Component({
  selector: 'app-multas',
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.scss']
})
export class MultasComponent implements OnInit {


  //array que guarda el resultado de la consulta
  multas: MultasI[] = [];

  patente = '';

  constructor( private multasSvc: BuscarService) { }


  ngOnInit(): void {

  }

  getMultas(patente:string){
    this.multasSvc.getxPatente(patente).subscribe(res => {  
      if(res==null || res.length==0){
        alert('No se encontraron multas para la patente ingresada');
      }else{
        this.multas = res;
      }   
               
    })
  }


}
