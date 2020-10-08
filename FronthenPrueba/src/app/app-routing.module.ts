import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRegistroclientesComponent} from '../app/components/form-registroclientes/form-registroclientes.component'
import {AlquilerComponent} from '../app/components/alquiler/alquiler.component'
import {BienvenidoComponent} from '../app/components/bienvenido/bienvenido.component'
import {ConsultarclienteComponent} from '../app/components/consultarcliente/consultarcliente.component'
import {VentasdiariaComponent} from '../app/components/ventasdiaria/ventasdiaria.component'
import {ClienteFrecuenteComponent} from '../app/components/cliente-frecuente/cliente-frecuente.component'
import {JuegorentadoComponent} from '../app/components/juegorentado/juegorentado.component'
import {JmenosrentadosedadComponent} from './components/jmenosrentadosedad/jmenosrentadosedad.component'
import {JuegosRentadosComponent} from './components/juegos-rentados/juegos-rentados.component'


const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'Registro', component: FormRegistroclientesComponent },
  { path: 'Alquiler', component: AlquilerComponent},
  { path: 'Consular-clientes', component: ConsultarclienteComponent},
  { path: 'Ventas-diarias', component: VentasdiariaComponent},
  { path: 'Client-frecuentado', component: ClienteFrecuenteComponent},
  { path: 'Juego-rentado', component: JuegorentadoComponent},
  { path: 'Juego-meno-rentado', component: JmenosrentadosedadComponent},
  { path: 'juegosalquilados', component: JuegosRentadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
