// src/modules/exampleModule/exampleController.ts
import { Request, Response } from 'express';
import { CalcService } from './CalcService';

const service = new CalcService();

export const add = async (req: Request, res: Response): Promise<void> => {
    try {
      const { a, b } = req.body;
      const result = await service.add(a, b);
      res.json({ result });
    } catch (error) {
      res.status(500).send('Algo deu errado: ' + error);
    }
  };
