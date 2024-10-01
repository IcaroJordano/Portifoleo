import { useState } from 'react';

import './Navbar.css'

import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { BsPeople} from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";


export function Navbar({setTema,tema}) {
    function mudar() {
        setTema(!tema)
    }
    return(
        <>
        <nav className='NavbarMobile'>
            <FaMoon style={{'display':tema?'none':'flex'}}  onClick={mudar}></FaMoon>
            <GoSun style={{'display':tema?'flex':'none'}}  onClick={mudar}>  </GoSun>
            <CiMenuFries id='menu'></CiMenuFries>                
            
        </nav>
        <nav className={`Navbar ${tema?'dark':"light"}`}>
            {/* <p>Icaro Jordano<br></br><span>Web Developer</span></p> */}
            <div className='links'>
                <a href="#Home"> <GoHome></GoHome> Home</a>
                <a href="#Sobre"><BsPerson ></BsPerson> Sobre</a>
                <a href="#Projetos"><BsRocketTakeoff></BsRocketTakeoff> Projetos</a>
                <a href="#Contact"><BsPeople></BsPeople> Contato</a>

            </div>
            <div className="icons">
                <FaGithub className='redes' ></FaGithub>
                <FaLinkedinIn className='redes' ></FaLinkedinIn>
                <FaMoon style={{'display':tema?'none':'flex'}}  onClick={mudar}></FaMoon>
                <GoSun style={{'display':tema?'flex':'none'}}  onClick={mudar}>  </GoSun>
            </div>
        </nav>
        </>
    )
}