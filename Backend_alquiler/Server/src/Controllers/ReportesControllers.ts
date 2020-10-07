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
}

export const reportescontrollers= new Reportescontrollers();