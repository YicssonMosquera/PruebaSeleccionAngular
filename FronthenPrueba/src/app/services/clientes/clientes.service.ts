import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
import { map } from 'rxjs/operators';
import { Clientes } from '../../models/clientes'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = keys.api.API_URI + '/alquiler'
  constructor(private httpclient: HttpClient) { }

  GetTipodocumento() {
    return this.httpclient.get(`${this.API_URI}/`)
  }

  GuardarClientes(Clientes: Clientes) {
    return this.httpclient.post(`${this.API_URI}`, Clientes);
  }

  GetClientes(PKIdentificacion) {
    return this.httpclient.get(`${this.API_URI}/${PKIdentificacion}`).pipe(map(data => data));
  }
}
