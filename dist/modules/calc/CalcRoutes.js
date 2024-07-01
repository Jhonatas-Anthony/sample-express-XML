"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/calculator/calculatorRoutes.ts
const express_1 = require("express");
const CalcController_1 = require("./CalcController");
const router = (0, express_1.Router)();
router.post('/add', CalcController_1.add);
exports.default = router;
