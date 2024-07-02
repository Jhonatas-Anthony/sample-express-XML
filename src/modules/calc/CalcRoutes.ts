// src/modules/calculator/calculatorRoutes.ts
import { Router } from 'express';
import { add, subtract } from './CalcController';

const router = Router();

router.post('/add', add);
router.post('/subtract', subtract);

export default router;
