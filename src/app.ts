import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './AllRoouter/Routers'
const app = express()

//middelware 
app.use(express.json())
app.use(cors())

// router function 
app.use("/api", router)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app