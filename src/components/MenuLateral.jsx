import "./MenuLateral.css"

import { GoHome } from "react-icons/go";
import { BsPeople} from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";

export function MenuLateral({valor}) {
    return(
        <nav className={`menu_lateral ${valor?"ativo":""}`}>
            <ul>
                <li>                
                    <a href="#Home"> <GoHome></GoHome> Home</a>
                </li>
                <li>                
                <a href="#Sobre"><BsPerson ></BsPerson> Sobre</a>
                </li>
                <li>                
                    <a href="#SoftSkills"><FaFeatherAlt></FaFeatherAlt> Soft Skills</a>
                </li>
                <li>                
                <a href="#HardSkills"><BiCodeAlt></ BiCodeAlt> Hard Skills</a>
                </li>

                <li>                
                <a href="#Metodologias"><BiCodeBlock></BiCodeBlock> Metodologias</a>
                </li>
                <li>                
                <a href="#Projetos"><BsRocketTakeoff></BsRocketTakeoff> Projetos</a>
                </li>
                <li>                
                <a href="#Contact"><BsPeople></BsPeople> Contato</a>
                </li>

            </ul>
        </nav>
    )
}