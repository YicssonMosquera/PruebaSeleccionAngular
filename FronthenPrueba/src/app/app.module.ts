import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
////////////////////Componentes////////////////////
import { AppComponent } from './app.component';
import { FormRegistroclientesComponent } from './components/form-registroclientes/form-registroclientes.component';
import { NavigationComponent } from './components/navigation/navigation.component';

/////////////////// Servicios////////////7777
import {ClientesService} from './services/clientes/clientes.service';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component'


@NgModule({
  declarations: [
    AppComponent,
    FormRegistroclientesComponent,
    NavigationComponent,
    AlquilerComponent,
    JuegosComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgbModule,
  ],
  providers: [
    FormsModule,
    ClientesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    JuegosComponent
  ]
})
export class AppModule { }
