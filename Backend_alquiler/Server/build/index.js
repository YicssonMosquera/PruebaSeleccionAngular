"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./Routes/IndexRoutes"));
const alquilerRoutes_1 = __importDefault(require("./Routes/alquilerRoutes"));
const reportesRoutes_1 = __importDefault(require("./Routes/reportesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/alquiler', alquilerRoutes_1.default);
        this.app.use('/api/reportes', reportesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
