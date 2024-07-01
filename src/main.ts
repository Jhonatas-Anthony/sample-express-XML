//const express = require('express')

import express, { Request, Response } from 'express';

const app = express();
const port = 3333

app.get('/', (res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})