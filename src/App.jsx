import './App.css'
import { useEffect, useState } from "react"

import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import Aos from 'aos'
import 'aos/dist/aos.css'

// AOS.init();
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const [tema,setTema]=useState(false)
  return (
    <div id='App' className={`App  ${tema?'dark':"light"}`}>
      <Navbar setTema={setTema} tema={tema}></Navbar>
          <Home ></Home>
          <About></About>
          <Projects data-aos='fade-down' ></Projects>
          <Contact className={'fade-up'}></Contact>
          <Footer></Footer>
    </div>
  )
}

export default App
