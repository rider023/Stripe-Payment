
const  express = require('express');
import {NextFunction, Request,Response} from 'express'


export const app = express()

 app.use(express.json() )

 const cors = require('cors')
 app.use(cors({origin:true}))

 app.post('/test',(req:Request,res:Response) =>{
    const amount = req.body.amount;
    res.status(200).send( {with_tax :amount*7})
    

 })

 import { createStripeCheckoutSession } from './checkout';

//  Checkouts
 app.post(
   '/checkouts/', runAsync(async({body}: Request,res:Response) =>{
      res.send(
         await createStripeCheckoutSession(body.line_items)
      )
   })
 )

//  Catch async errors when awaiting promises

function runAsync(callback:Function){
   return(req:Request,res:Response,next:NextFunction) => {
      callback(req,res,next).catch(next);
   }
}