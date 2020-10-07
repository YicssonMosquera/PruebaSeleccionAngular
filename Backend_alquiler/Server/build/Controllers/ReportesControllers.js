"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportescontrollers = void 0;
const database_1 = __importDefault(require("../database"));
class Reportescontrollers {
    Ventasdeldia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ReporteVentas = yield database_1.default.query("SELECT DATE_FORMAT(TblAlquiler.Fecha_Generacion,'%Y/%c/%d') as fecha, SUM(TblDetalleAlquiler.Total)as Totalventa from TblAlquiler, TblDetalleAlquiler where TblAlquiler.PKId = TblDetalleAlquiler.FKId_TblAlquiler GROUP by DATE_FORMAT(TblAlquiler.Fecha_Generacion,'%Y/%c/%d')", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    Clientefrecuente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ReporteVentas = yield database_1.default.query("SELECT C.PKIdentificacion,C.Nombre_Completo,B.maximo FROM (SELECT TblAlquiler.FKIdentificacion_TblClientes, COUNT(TblAlquiler.FKIdentificacion_TblClientes)as cuenta from TblAlquiler GROUP BY TblAlquiler.FKIdentificacion_TblClientes ) AS A INNER JOIN (select MAX(cuentatodos.cuenta) as maximo FROM (SELECT TblAlquiler.FKIdentificacion_TblClientes, COUNT(TblAlquiler.FKIdentificacion_TblClientes)as cuenta from TblAlquiler GROUP BY TblAlquiler.FKIdentificacion_TblClientes ) as cuentatodos) AS B ON A.cuenta=B.maximo INNER JOIN TblClientes AS C ON A.FKIdentificacion_TblClientes=C.PKIdentificacion ", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    juegorentable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ReporteVentas = yield database_1.default.query("SELECT C.Nombre,C.Ano, D.Descripcion, C.Marca,B.maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) AS A INNER JOIN (select MAX(cuentatodos.cuenta) as maximo FROM (SELECT TblDetalleAlquiler.FKid_TblJuegos, COUNT(TblDetalleAlquiler.FKid_TblJuegos)as cuenta from TblDetalleAlquiler GROUP BY TblDetalleAlquiler.FKid_TblJuegos ) as cuentatodos) AS B ON A.cuenta=B.maximo INNER JOIN TblJuegos AS C ON A.FKid_TblJuegos=C.PKid INNER JOIN TblTipoTecnologia as D ON C.FKId_TblTipoTecnologia = D.PKId ", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
}
exports.reportescontrollers = new Reportescontrollers();
