import {Router} from 'express'
import { alquilercontrollers } from '../Controllers/alquilerControllers'

class AlquilerRoutes{
  public   router:Router = Router()

  constructor(){
    this.config();
  }

  config():void{
      this.router.get('/',alquilercontrollers.CargarTipoDocumento)
      this.router.get('/:PKIdentificacion',alquilercontrollers.CargarCliente)
      this.router.post('/',alquilercontrollers.GuardarClientes)
      this.router.post('/alquiler',alquilercontrollers.GuardarAlquiler)
      this.router.post('/detalle',alquilercontrollers.GuardarDetalleAlquiler)
      this.router.get('/juegos/juegos',alquilercontrollers.CargarJuegos)
  }
}

const alquilerRoutes =  new AlquilerRoutes()
export default alquilerRoutes.router