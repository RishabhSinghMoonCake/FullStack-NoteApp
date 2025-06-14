import React from "react"
import {Routes,Route} from "react-router"
import Login from "./pages/loginPage.jsx"
import Home from "./pages/Home.jsx"
import NoteCreate from "./pages/NoteCreate.jsx"
import toast from "react-hot-toast"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/note/:id" element={<NoteCreate/>}/>
        
      </Routes>
    </div>
    
  )//<Route path="/note/:id" element={<NoteCreate/>}/>
}

export default App
