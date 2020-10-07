import {Router} from 'express'
import {reportescontrollers} from '../Controllers/ReportesControllers'

class ReportesRoutes{
  public   router:Router = Router()

  constructor(){
    this.config();
  }

  config():void{
      this.router.get('/',reportescontrollers.Ventasdeldia)
      
  }
}

const reportesroutes =  new ReportesRoutes()
export default reportesroutes.router