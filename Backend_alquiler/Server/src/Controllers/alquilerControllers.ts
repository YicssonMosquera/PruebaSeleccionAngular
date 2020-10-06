import { Request, Response, json, request } from 'express'
import pool from '../database'
import path from 'path'

class AlquilerControllers {

    public async CargarTipoDocumento(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query('SELECT * FROM TblTipodocumento', function (err, result, fields) {

                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarCliente(req: Request, res: Response) {
        const {PKIdentificacion} = req.params
        try {
            const Clientes = await pool.query('SELECT * FROM TblClientes WHERE PKIdentificacion = ?',[PKIdentificacion], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async GuardarClientes(req: Request, res: Response){
        try {
            await pool.query('INSERT INTO TblClientes set ?', [req.body])
            console.log(req.body)
            res.json({message: 'Clientes Guardados con exito'});
            
        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos'});
        };
      
        
    }
    public async GuardarAlquiler(req: Request, res: Response){
        try {
            await pool.query('INSERT INTO TblAlquiler set ?', [req.body])
            console.log(req.body)
            res.json({message: 'Clientes Guardados con exito'});
            
        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos'});
        };
      
        
    }
    public async GuardarDetalleAlquiler(req: Request, res: Response){
        try {
            await pool.query('INSERT INTO TblDetalleAlquiler set ?', [req.body])
            console.log(req.body)
            res.json({message: 'Clientes Guardados con exito'});
            
        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos'});
        };
      
        
    }
    
}

export const alquilercontrollers = new AlquilerControllers();