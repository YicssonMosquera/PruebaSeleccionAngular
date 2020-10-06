import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRegistroclientesComponent} from '../app/components/form-registroclientes/form-registroclientes.component'

const routes: Routes = [
  { path: 'Registro', component: FormRegistroclientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
