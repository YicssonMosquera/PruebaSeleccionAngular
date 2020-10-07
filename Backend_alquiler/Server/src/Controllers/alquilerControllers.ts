import { Request, Response, json, request } from 'express'
import pool from '../database'


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
        const { PKIdentificacion } = req.params
        try {
            const Clientes = await pool.query('SELECT * FROM TblClientes WHERE PKIdentificacion = ?', [PKIdentificacion], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async GuardarClientes(req: Request, res: Response) {
        try {
            await pool.query('INSERT INTO TblClientes set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Clientes Guardados con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }
    public async GuardarAlquiler(req: Request, res: Response) {
        try {
            await pool.query('INSERT INTO TblAlquiler set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Clientes Guardados con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }
    public async GuardarDetalleAlquiler(req: Request, res: Response) {
        try {
            await pool.query('INSERT INTO TblDetalleAlquiler set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Clientes Guardados con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public async CargarJuegos(req: Request, res: Response) {
        try {
            const Juegos = await pool.query('SELECT TblJuegos.PKid, TblJuegos.Nombre,  TblJuegos.Protagonistas,TblJuegos.Director,TblJuegos.Productor,TblJuegos.Marca,TblJuegos.Precio, TblJuegos.Ano, TblTipoTecnologia.Descripcion,  "" as Cantidad from TblJuegos,TblTipoTecnologia  WHERE TblTipoTecnologia.PKId = TblJuegos.FKId_TblTipoTecnologia', function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarClienteGeneral(req: Request, res: Response) {
        const { PKIdentificacion } = req.params
        try {
            const Clientes = await pool.query('SELECT * FROM TblClientes',  function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarCodigoalquiler(req: Request, res: Response) {
        const {FKIdentificacion_TblClientes} = req.params
        try {
            const Clientes = await pool.query('SELECT MAX(PKId) as PKId, FKIdentificacion_TblClientes FROM TblAlquiler WHERE FKIdentificacion_TblClientes  =?', [FKIdentificacion_TblClientes], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
}

export const alquilercontrollers = new AlquilerControllers();