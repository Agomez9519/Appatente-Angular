import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ListarRoutingModule } from './listar-routing.module';



@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ListarRoutingModule
  ]
})
export class ListarModule { }
