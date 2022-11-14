import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcarsxrutComponent } from './allcarsxrut.component';

const routes: Routes = [{ path: '', component: AllcarsxrutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcarsxrutRoutingModule { }
