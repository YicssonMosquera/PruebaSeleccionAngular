"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportesControllers_1 = require("../Controllers/ReportesControllers");
class ReportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ReportesControllers_1.reportescontrollers.Ventasdeldia);
        this.router.get('/frecuente', ReportesControllers_1.reportescontrollers.Clientefrecuente);
        this.router.get('/jegosrestable', ReportesControllers_1.reportescontrollers.juegorentable);
        this.router.get('/minimoedades', ReportesControllers_1.reportescontrollers.minimoporedades);
        this.router.get('/:PKIdentificacion', ReportesControllers_1.reportescontrollers.CargarJuegosrentados);
    }
}
const reportesroutes = new ReportesRoutes();
exports.default = reportesroutes.router;
