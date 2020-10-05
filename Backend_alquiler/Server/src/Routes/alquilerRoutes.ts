import {Router} from 'express'
import { alquilercontrollers } from '../Controllers/alquilerControllers'

class AlquilerRoutes{
  public   router:Router = Router()

  constructor(){
    this.config();
  }

  config():void{
      this.router.get('/',alquilercontrollers.CargarTipoDocumento)
      this.router.get('/tecnologia',alquilercontrollers.CargarTipoTecnologia)
  }
}

const alquilerRoutes =  new AlquilerRoutes()
export default alquilerRoutes.router