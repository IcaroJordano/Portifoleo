// import './App.css'
import { useState } from "react"

import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"

function App() {
  const [tema,setTema]=useState(false)
  return (
    <div id='App' className={`${tema?'dark':"light"}`}>
      <Navbar setTema={setTema} tema={tema}></Navbar>
      <Home ></Home>
    </div>
  )
}

export default App
