import { Request, Response, json, request } from 'express'
import pool from '../database'

class Reportescontrollers {
    public async Ventasdeldia(req: Request, res: Response) {
        try {
            const ReporteVentas = await pool.query("SELECT DATE_FORMAT(TblAlquiler.Fecha_Generacion,'%Y/%c/%d') as fecha, SUM(TblDetalleAlquiler.Total)as Totalventa from TblAlquiler, TblDetalleAlquiler where TblAlquiler.PKId = TblDetalleAlquiler.FKId_TblAlquiler GROUP by DATE_FORMAT(TblAlquiler.Fecha_Generacion,'%Y/%c/%d')", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async Clientefrecuente(req: Request, res: Response) {
        try {
            const ReporteVentas = await pool.query("SELECT C.PKIdentificacion,C.Nombre_Completo,B.maximo FROM (SELECT TblAlquiler.FKIdentificacion_TblClientes, COUNT(TblAlquiler.FKIdentificacion_TblClientes)as cuenta from TblAlquiler GROUP BY TblAlquiler.FKIdentificacion_TblClientes ) AS A INNER JOIN (select MAX(cuentatodos.cuenta) as maximo FROM (SELECT TblAlquiler.FKIdentificacion_TblClientes, COUNT(TblAlquiler.FKIdentificacion_TblClientes)as cuenta from TblAlquiler GROUP BY TblAlquiler.FKIdentificacion_TblClientes ) as cuentatodos) AS B ON A.cuenta=B.maximo INNER JOIN TblClientes AS C ON A.FKIdentificacion_TblClientes=C.PKIdentificacion ", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async juegorentable(req: Request, res: Response) {
        try {
            const ReporteVentas = await pool.query("SELECT C.Nombre,C.Ano, D.Descripcion, C.Marca,B.maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) AS A INNER JOIN (select MAX(cuentatodos.cuenta) as maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) as cuentatodos) AS B ON A.cuenta=B.maximo INNER JOIN TblJuegos AS C ON A.FKid_TblJuegos=C.PKid INNER JOIN TblTipoTecnologia as D ON C.FKId_TblTipoTecnologia = D.PKId ", function (err, result, fields) {
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

export const reportescontrollers = new Reportescontrollers();