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

    public async CargarTipoTecnologia(req: Request, res: Response) {
        try {
            const TipoTecnologia = await pool.query('SELECT * FROM TblTipoTecnologia', function (err, result, fields) {

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
        
    }
}

export const alquilercontrollers = new AlquilerControllers();