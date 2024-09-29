import './App.css'
import { useState } from "react"

import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"

function App() {
  const [tema,setTema]=useState(false)
  return (
    <div id='App' className={` App ${tema?'dark':"light"}`}>
      <Navbar setTema={setTema} tema={tema}></Navbar>
      <Home ></Home>
      <About></About>
    </div>
  )
}

export default App
