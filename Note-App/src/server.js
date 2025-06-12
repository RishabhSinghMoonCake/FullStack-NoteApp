import express from 'express'

const app = express()
const PORT = process.env.PORT || 5003


app.get('/' , (req,res)=>{
  res.send('HELLO WOrdl!')
})

app.listen(PORT, ()=>{
  console.log(`Server Successfully started at port ${PORT}`)
})