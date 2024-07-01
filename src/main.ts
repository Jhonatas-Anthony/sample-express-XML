import express, { Request, Response } from 'express';
import calculatorRoutes from './modules/calc/CalcRoutes';

const app = express();
const port = 3333

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use('/calculator', calculatorRoutes);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})