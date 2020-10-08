import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  API_URI = keys.api.API_URI + '/reportes'
  constructor(private httpclient: HttpClient) { }

  GetVentasdiarias() {
    return this.httpclient.get(`${this.API_URI}/`)
  }

  Clientefrecuente() {
    return this.httpclient.get(`${this.API_URI}/frecuente`)
  }


  Juegorentable() {
    return this.httpclient.get(`${this.API_URI}/jegosrestable`)
  }

}
