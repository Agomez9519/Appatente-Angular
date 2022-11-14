import { Component, OnInit, Input } from '@angular/core';
import { Propietario, VehiculoI } from 'src/app/interfaces/vehiculo';

@Component({
  selector: 'app-card-v',
  templateUrl: './card-v.component.html',
  styleUrls: ['./card-v.component.scss']
})
export class CardVComponent implements OnInit {

  @Input('vehiculo') vehiculo: any; 
  @Input('propietarios') propietarios: any[];
  @Input('cantProp') cantProp: number;


  constructor() { 

  }

  ngOnInit(): void {    
    
  }


}
