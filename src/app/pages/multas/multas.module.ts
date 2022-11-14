import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultasRoutingModule } from './multas-routing.module';
import { MultasComponent } from './multas.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    MultasComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MultasRoutingModule,
    MaterialModule
  ]
})
export class MultasModule { }
