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
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const CalcService_1 = require("./CalcService");
const service = new CalcService_1.CalcService();
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { a, b } = req.body;
        const result = yield service.add(a, b);
        console.log(a, b);
        res.json({ result });
    }
    catch (error) {
        res.status(500).send('Algo deu errado');
    }
});
exports.add = add;
