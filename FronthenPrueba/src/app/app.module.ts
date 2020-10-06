import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
////////////////////Componentes////////////////////
import { AppComponent } from './app.component';
import { FormRegistroclientesComponent } from './components/form-registroclientes/form-registroclientes.component';
import { NavigationComponent } from './components/navigation/navigation.component';

/////////////////// Servicios////////////7777
import {ClientesService} from './services/clientes/clientes.service'


@NgModule({
  declarations: [
    AppComponent,
    FormRegistroclientesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormsModule,
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
