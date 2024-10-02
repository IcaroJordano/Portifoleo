import "./NavbarMobile.css"

import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoSun } from "react-icons/go";

export function NavbarMobile({setTema,tema}) {
        function mudar() {
            setTema(!tema)
        }
    return(
        <nav className='NavbarMobile'>
            <p>Icaro Jordano<br></br><span>Web Developer</span></p>
            <div className="icons">
                <FaMoon style={{'display':tema?'none':'flex'}}  onClick={mudar}></FaMoon>
                <GoSun style={{'display':tema?'flex':'none'}}  onClick={mudar}>  </GoSun>
                <CiMenuFries id='menu'></CiMenuFries>                
            
            </div>
        </nav>        
    )
}