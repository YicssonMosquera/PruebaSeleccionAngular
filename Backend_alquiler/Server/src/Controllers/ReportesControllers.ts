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
            const ReporteVentas = await pool.query("SELECT C.Nombre,C.Ano, D.Descripcion, C.Marca,B.maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) AS A INNER JOIN (select MAX(cuentatodos.cuenta) as maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) as cuentatodos) AS B ON A.cuenta=B.maximo INNER JOIN TblJuegos AS C ON A.FKid_TblJuegos=C.PKid INNER JOIN TblTipoTecnologia as D ON C.FKId_TblTipoTecnologia = D.PKId", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    
    public async minimoporedades(req: Request, res: Response) {
        try {
            var query = "SELECT MIN(cuenta1020.cuenta) as minimo, cuenta1020.Nombre, 'edad entre 10 y 20 ' as rango "
            query += "FROM (SELECT rango1020.PKId, rango1020.Nombre, COUNT(rango1020.PKId) as cuenta ";
            query += "FROM (SELECT JU.PKid, JU.Nombre FROM TblClientes Cl INNER JOIN TblAlquiler Al ON Al.FKIdentificacion_TblClientes = Cl.PKIdentificacion ";
            query += "INNER JOIN TblDetalleAlquiler Dt ON Dt.FKId_TblAlquiler = Al.PKId INNER JOIN TblJuegos JU ON JU.PKid = Dt.FKid_TblJuegos ";
            query += "WHERE Cl.Edad Between 10 and 20 ) as rango1020 GROUP BY rango1020.PKId, rango1020.Nombre) as cuenta1020 ";
            query += "UNION SELECT MIN(cuenta1020.cuenta) as minimo1020, cuenta1020.Nombre, 'edad entre 20 y 30 ' as rango ";
            query += "FROM (SELECT rango1020.PKId, rango1020.Nombre, COUNT(rango1020.PKId) as cuenta ";
            query += "FROM (SELECT JU.PKid, JU.Nombre FROM TblClientes Cl INNER JOIN TblAlquiler Al ON Al.FKIdentificacion_TblClientes = Cl.PKIdentificacion ";
            query += "INNER JOIN TblDetalleAlquiler Dt ON Dt.FKId_TblAlquiler = Al.PKId INNER JOIN TblJuegos JU ON JU.PKid = Dt.FKid_TblJuegos ";
            query += "WHERE Cl.Edad Between 20 and 30 ) as rango1020 GROUP BY rango1020.PKId, rango1020.Nombre) as cuenta1020 ";
            const ReporteVentas = await pool.query(query, function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarJuegosrentados(req: Request, res: Response) {
        const { PKIdentificacion } = req.params
        try {
            const Clientes = await pool.query("SELECT TblClientes.PKIdentificacion, TblClientes.Nombre_Completo, TblJuegos.Nombre, TblTipoTecnologia.Descripcion, TblDetalleAlquiler.Fecha_Alquiler FROM TblJuegos, TblAlquiler, TblDetalleAlquiler, TblClientes, TblTipoTecnologia WHERE TblClientes.PKIdentificacion = TblAlquiler.FKIdentificacion_TblClientes and TblAlquiler.PKId = TblDetalleAlquiler.FKId_TblAlquiler and TblJuegos.PKid = TblDetalleAlquiler.FKid_TblJuegos and TblTipoTecnologia.PKId = TblJuegos.FKId_TblTipoTecnologia and TblClientes.PKIdentificacion = ?", [PKIdentificacion], function (err, result, fields) {
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