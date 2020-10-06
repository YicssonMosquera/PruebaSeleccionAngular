"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alquilerControllers_1 = require("../Controllers/alquilerControllers");
class AlquilerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', alquilerControllers_1.alquilercontrollers.CargarTipoDocumento);
        this.router.get('/:PKIdentificacion', alquilerControllers_1.alquilercontrollers.CargarCliente);
        this.router.post('/', alquilerControllers_1.alquilercontrollers.GuardarClientes);
        this.router.post('/alquiler', alquilerControllers_1.alquilercontrollers.GuardarAlquiler);
        this.router.post('/detalle', alquilerControllers_1.alquilercontrollers.GuardarDetalleAlquiler);
    }
}
const alquilerRoutes = new AlquilerRoutes();
exports.default = alquilerRoutes.router;
