import toast from "react-hot-toast"
import '../css/loginPage.css'

import React, { useState,useEffect,useRef} from "react"
import { Link,useNavigate } from "react-router"

export default function Login()
{
  const [register,setRegister] = useState(false)
  const [emailVal,setEmailVal] = useState("")
  const [passVal, setPassVal] = useState("")
  
  const apiBase = 'http://localhost:8000/'

  const navigate = useNavigate()

  function handleEmailChange(event)
  {
    setEmailVal(e=>event.target.value)
  }

  function handlePasswordChange(event)
  {
    setPassVal(p=>event.target.value)
  }

  async function Authenticate(event)
  {
    if(!emailVal||
      !passVal||
      !emailVal.includes('@')||
      passVal.length<6) return;

    try {
      
      console.log(emailVal, passVal)
      let data
      if(register)
      {
        const response = await fetch(apiBase + 'auth/register',{
          method:'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({username:emailVal,password:passVal})
        })
        if(!response.ok) return;
        data = await response.json()
      }
      else
      {
        const response = await fetch(apiBase + 'auth/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({username:emailVal, password:passVal})
        })
        if(!response.ok) return;
        data = await response.json()
      }
      if(data.token)
      {
        const token = data.token
        localStorage.setItem('token', token)
        toast.success('Success')
        event.target.innerHTML = 'Loading...'

        setTimeout(() => {
          navigate('/home')
        }, 200);
        
      }
      else
      {
        const mess = data.message
        toast.error(mess||'Failed to authenticate')
        
      }
    } catch (error) {
      console.log(error)
      toast.error('Failed to authenticate')
    } finally
    {
      
    }
  }

  function toggle(event)
  {
    if(register)
    {
      event.target.innerHTML = 'Sign In'
      setRegister(false);
    }
    else
    {
      event.target.innerHTML = 'Sign Up'
      setRegister(true)
    }
  }

  return(
    <>
      <h1 className="heading">Your Personalized Todo App</h1>
      <section className="login">
        {
        register?<h1 className="sign-header">Sign Up</h1>
        :<h1 className="sign-header">Sign In</h1>}
        <input className="email-input-field" placeholder="Username or Email" onChange={handleEmailChange} type="email" />
        <input className="password-input-field" placeholder="Password" onChange={handlePasswordChange} type="password" />
        <p className="toggle" onClick={(e)=>toggle(e)}>Sign In?</p>
        <button onClick={(event)=>Authenticate(event)}>
          {
            register?<p>Sign Up</p>
            : <p>Sign In</p>
          }
        </button>
      </section>
    </>
    
  )
}
