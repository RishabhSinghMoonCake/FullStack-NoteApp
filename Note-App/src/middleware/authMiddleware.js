import jwt from 'jsonwebtoken'

export default function AuthMiddleware(req,res,next)
{
  const token = req.headers['authorization']
  if(!token) return res.sendStatus(401)

  jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err) return res.sendStatus(401)
    req.userId = decoded.id
    next()
  })
}