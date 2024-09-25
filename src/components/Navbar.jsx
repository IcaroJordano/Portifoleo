import { useState } from 'react';

import './Navbar.css'

import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


export function Navbar({setTema,tema}) {
    function mudar() {
        setTema(!tema)
    }
    return(
        <nav className={`Navbar ${tema?'dark':"light"}`}>
            <p>Icaro Jordano<br></br><span>Web Developer</span></p>
            <div className='links'>
                <a href="">Home</a>
                <a href="">Sobre mim</a>
                <a href="">Projects</a>
                <a href="">Contact</a>

            </div>
            <div className="icons">
                <FaGithub className='redes' ></FaGithub>
                <FaLinkedinIn className='redes' ></FaLinkedinIn>
                <FaMoon style={{'display':tema?'none':'flex'}}  onClick={mudar}></FaMoon>
                <GoSun style={{'display':tema?'flex':'none'}}  onClick={mudar}>  </GoSun>
                <CiMenuFries id='menu'></CiMenuFries>                
            </div>
        </nav>
    )
}