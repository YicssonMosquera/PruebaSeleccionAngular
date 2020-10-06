import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRegistroclientesComponent} from '../app/components/form-registroclientes/form-registroclientes.component'
import {AlquilerComponent} from '../app/components/alquiler/alquiler.component'
const routes: Routes = [
  { path: 'Registro', component: FormRegistroclientesComponent },
  { path: 'Alquiler', component: AlquilerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
