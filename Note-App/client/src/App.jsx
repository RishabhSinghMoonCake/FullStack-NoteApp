import React from "react"
import {Routes,Route} from "react-router"
import Login from "./pages/loginPage.jsx"
import Home from "./pages/Home.jsx"
import NoteCreate from "./pages/NoteCreate.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/note/:id" element={<NoteCreate/>}/>
    </Routes>
  )
}

export default App
