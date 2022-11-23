import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './auth/guards/check-login.guard';
//import { CheckLoginGuard } from './auth/guards/check-login.guard';
//import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const routes: Routes = [
  //ruta por defecto
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'listar', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule),canActivate: [CheckLoginGuard] },
  { path: 'multas', loadChildren: () => import('./pages/multas/multas.module').then(m => m.MultasModule),canActivate: [CheckLoginGuard] },
  { path: 'vehiculo', loadChildren: () => import('./pages/vehiculo/vehiculo.module').then(m => m.VehiculoModule),canActivate: [CheckLoginGuard] },
  { path: 'allcarsxrut', loadChildren: () => import('./pages/allcarsxrut/allcarsxrut.module').then(m => m.AllcarsxrutModule),canActivate: [CheckLoginGuard] },
  { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule) ,canActivate: [CheckLoginGuard]},
  { path: '**', redirectTo: '/login' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
