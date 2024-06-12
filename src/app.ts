import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './AllRoouter/Routers'
import GlobalError from './middelware/Errors/globalError'
import { notFound } from './middelware/Errors/NotFound'
const app = express()

//middelware 
app.use(express.json())
app.use(cors())

// router function 
app.use("/api", router)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
// globalError 
app.use(GlobalError)

// not found route 
app.use(notFound)

export default app