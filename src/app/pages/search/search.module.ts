import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule
  ]
})
export class SearchModule { }
