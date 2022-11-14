import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoComponent } from './vehiculo.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CardVComponent } from './card-v/card-v.component';


@NgModule({
  declarations: [
    VehiculoComponent,
    CardVComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    MaterialModule
  ]
})
export class VehiculoModule { }
