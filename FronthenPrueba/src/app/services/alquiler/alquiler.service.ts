import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { map } from 'rxjs/operators';
import { Clientes } from '../../models/clientes'
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  juego
  private Juegos$ = new BehaviorSubject([]);
  API_URI = keys.api.API_URI + '/alquiler'
  constructor(private httpclient: HttpClient) { }

  CargarJuegos(){
    return this.httpclient.get(`${this.API_URI}/juegos/juegos`)
  }

  getJuegos$(): Observable<any[]> {
    return this.Juegos$.asObservable();
  }

  private refresh() {
    this.Juegos$.next(this.juego)
  }
  
  GETJUEGOS(juego: any) {    
    this.juego = juego;
    this.refresh();
  }
}
