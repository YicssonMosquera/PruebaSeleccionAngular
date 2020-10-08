import {Router} from 'express'
import {reportescontrollers} from '../Controllers/ReportesControllers'

class ReportesRoutes{
  public   router:Router = Router()

  constructor(){
    this.config();
  }

  config():void{
      this.router.get('/',reportescontrollers.Ventasdeldia);
      this.router.get('/frecuente',reportescontrollers.Clientefrecuente)
      this.router.get('/jegosrestable',reportescontrollers.juegorentable)
      this.router.get('/minimoedades',reportescontrollers.minimoporedades)
      this.router.get('/:PKIdentificacion',reportescontrollers.CargarJuegosrentados)
  }
}

const reportesroutes =  new ReportesRoutes()
export default reportesroutes.router