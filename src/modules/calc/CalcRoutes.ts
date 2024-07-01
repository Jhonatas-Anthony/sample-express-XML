// src/modules/calculator/calculatorRoutes.ts
import { Router } from 'express';
import { add } from './CalcController';

const router = Router();

router.post('/add', add);

export default router;
