import express from 'express'
import db from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router()
const salt = 8

router.post('/register', (req,res)=>{
  
  const {username,password} = req.body

  //encrypt the password
  const hashedPassword = bcrypt.hashSync(password,salt)

  //since we are doing things in db things can go wrong hence use try catch

  try
  {
    const insertUser = db.prepare('INSERT INTO users (username,password) VALUES (?,?)')
    const result = insertUser.run(username,hashedPassword)

    const token = jwt.sign({id:result.lastInsertRowid},process.env.JWT_SECRET, {expiresIn: '24h'})
    res.json({token})
  }
  catch(error)
  {
    console.log(error)
    res.sendStatus(503)
  }
})

router.post('/login' , (req,res)=>{
  const {username, password} = req.body

  try{
    const users = db.prepare('SELECT * FROM users WHERE username = ?')
    const user = users.get(username)
    if(!user)
    {
      return res.sendStatus(404)
    }
    
    const passwordIsValid = bcrypt.compareSync(password,user.password)
    if(!passwordIsValid)
    {
      return res.sendStatus(401)
    }
    const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn:'24h'})
    res.json({token})
  }
  catch(error)
  {
    res.sendStatus(503)
  }
})

export default router