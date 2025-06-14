import express from 'express'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import AuthMiddleware from './middleware/authMiddleware.js'

import noteRoutes from './routes/noteRoutes.js'

const app = express()
const PORT = process.env.PORT || 5003


//Get the file path from the url of the current file
const __filename = fileURLToPath(import.meta.url)

//Get the directory path to the current file
const __dirname = dirname(__filename)

//middleware
app.use(express.json())
app.use(cors())

//Add frontend files as static assets
app.use(express.static(path.join(__dirname,'../client')))

app.get('/' , (req,res)=>{
  res.sendFile(path.join(__dirname,'../client', 'index.html'))
})

//Routes
app.use('/auth', authRoutes)
app.use('/noteAuth', AuthMiddleware,noteRoutes)

app.listen(PORT, ()=>{
  console.log(`Server Successfully started at port ${PORT}`)
})