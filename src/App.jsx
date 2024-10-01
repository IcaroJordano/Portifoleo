import './App.css'
import { useState } from "react"

import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [tema,setTema]=useState(false)
  return (
    <div id='App' className={` App ${tema?'dark':"light"}`}>
      <Navbar setTema={setTema} tema={tema}></Navbar>
          <Home ></Home>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
    </div>
  )
}

export default App
