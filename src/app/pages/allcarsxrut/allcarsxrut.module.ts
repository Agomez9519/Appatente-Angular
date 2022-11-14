import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcarsxrutRoutingModule } from './allcarsxrut-routing.module';
import { AllcarsxrutComponent } from './allcarsxrut.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AllcardComponent } from './allcard/allcard.component';


@NgModule({
  declarations: [
    AllcarsxrutComponent,
    AllcardComponent
  ],
  imports: [
    CommonModule,
    AllcarsxrutRoutingModule,
    MaterialModule
  ]
})
export class AllcarsxrutModule { }
