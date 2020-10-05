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
        this.router.get('/tecnologia', alquilerControllers_1.alquilercontrollers.CargarTipoTecnologia);
        this.router.post('/', alquilerControllers_1.alquilercontrollers.GuardarClientes);
    }
}
const alquilerRoutes = new AlquilerRoutes();
exports.default = alquilerRoutes.router;
