
const  express = require('express');
import {Request,Response} from 'express'


export const app = express()

 app.use(express.json() )

 const cors = require('cors')
 app.use(cors({origin:true}))

 app.post('/test',(req:Request,res:Response) =>{
    const amount = req.body.amount;
    res.status(200).send( {with_tax :amount*7})
    

 })