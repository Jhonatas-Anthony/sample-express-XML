"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CalcRoutes_1 = __importDefault(require("./modules/calc/CalcRoutes"));
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.json());
app.use('/calculator', CalcRoutes_1.default);
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
