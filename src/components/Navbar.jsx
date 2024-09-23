import { useState } from 'react';

import './Navbar.css'

import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoSun } from "react-icons/go";

export function Navbar() {
    const [tema,setTema]=useState(false)
    function mudar() {
        setTema(!tema)
    }
    return(
        <nav className={`Navbar ${tema?'dark':"light"}`}>
            <p>{'</Icaro>'}</p>
            <div className="icons">
                <FaMoon style={{'display':tema?'none':'flex'}} onClick={mudar}></FaMoon>
                <GoSun style={{'display':tema?'flex':'none'}}  onClick={mudar}>  </GoSun>
                <CiMenuFries></CiMenuFries>                
            </div>
        </nav>
    )
}