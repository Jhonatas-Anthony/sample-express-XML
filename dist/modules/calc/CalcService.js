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
exports.CalcService = void 0;
/* import { MathExpression } from './CalcModel';
import { Request, Response } from 'express'; */
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
class CalcService {
    constructor() {
        this.apiUrl = 'URL_DA_API_EXTERNA';
    }
    add(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            const xmlRequest = `
        <?xml version="1.0" encoding="utf-8"?>
        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <Add xmlns="http://tempuri.org/">
              <intA>${a}</intA>
              <intB>${b}</intB>
            </Add>
          </soap:Body>
        </soap:Envelope>`;
            const response = yield axios_1.default.post(this.apiUrl, xmlRequest, {
                headers: { 'Content-Type': 'text/xml' }
            });
            const result = yield (0, xml2js_1.parseStringPromise)(response.data);
            const sum = parseFloat(result['soap:Envelope']['soap:Body'][0]['AddResponse'][0]['AddResult'][0]);
            return sum;
        });
    }
}
exports.CalcService = CalcService;
