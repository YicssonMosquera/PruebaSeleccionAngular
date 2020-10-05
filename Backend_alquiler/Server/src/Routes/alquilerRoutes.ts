import {Router} from 'express'

class AlquilerRoutes{
  public   router:Router = Router()

  constructor(){
    this.config();
  }

  config():void{
      this.router.get('/',(req,res)=>res.send('Alquiler'))
  }
}

const alquilerRoutes =  new AlquilerRoutes()
export default alquilerRoutes.router