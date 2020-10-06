import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { map } from 'rxjs/operators';
import { Clientes } from '../../models/clientes'
@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  API_URI = keys.api.API_URI + '/alquiler'
  constructor(private httpclient: HttpClient) { }

  CargarJuegos(){
    return this.httpclient.get(`${this.API_URI}/juegos/juegos`)
  }
}
