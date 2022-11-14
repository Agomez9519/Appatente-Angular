import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultasComponent } from './multas.component';

const routes: Routes = [{ path: '', component: MultasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultasRoutingModule { }
