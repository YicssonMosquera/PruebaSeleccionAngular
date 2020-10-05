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
exports.alquilercontrollers = void 0;
const database_1 = __importDefault(require("../database"));
class AlquilerControllers {
    CargarTipoDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Tipodocumento = yield database_1.default.query('SELECT * FROM TblTipodocumento', function (err, result, fields) {
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
    CargarTipoTecnologia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const TipoTecnologia = yield database_1.default.query('SELECT * FROM TblTipoTecnologia', function (err, result, fields) {
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
    GuardarClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO TblClientes set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Clientes Guardados con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    GuardarAlquiler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO TblAlquiler set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Clientes Guardados con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    GuardarDetalleAlquiler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO TblDetalleAlquiler set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Clientes Guardados con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.alquilercontrollers = new AlquilerControllers();
