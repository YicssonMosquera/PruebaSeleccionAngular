import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRegistroclientesComponent} from '../app/components/form-registroclientes/form-registroclientes.component'
import {AlquilerComponent} from '../app/components/alquiler/alquiler.component'
import {BienvenidoComponent} from '../app/components/bienvenido/bienvenido.component'
const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'Registro', component: FormRegistroclientesComponent },
  { path: 'Alquiler', component: AlquilerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
