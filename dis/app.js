"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routers_1 = __importDefault(require("./AllRoouter/Routers"));
const globalError_1 = __importDefault(require("./App/middelware/Errors/globalError"));
const NotFound_1 = require("./App/middelware/Errors/NotFound");
const app = (0, express_1.default)();
//middelware 
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// router function 
app.use("/api", Routers_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// globalError 
app.use(globalError_1.default);
// not found route 
app.use(NotFound_1.notFound);
exports.default = app;
