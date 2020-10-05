"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AlquilerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Alquiler'));
    }
}
const alquilerRoutes = new AlquilerRoutes();
exports.default = alquilerRoutes.router;
