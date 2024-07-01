// import express from 'express'

const express = require('express')

// import { Router, Request, Response } from 'express';

const { Router, Request} = express

const app = express();

// const route = Router()

//app.use(express.json())

/* route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333') */

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3333, () => {
    console.log(`Example app listening on port ${3333}`)
})