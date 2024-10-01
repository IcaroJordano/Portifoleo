import "./Home.css"

import avatar from '../midias/avatar.jpeg'

import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



export function Home() {
    return(
        <section className="Home" id="Home">
            <div className="image">
                <img src={avatar} alt="" />
            </div>
            <div className="apresentacao">
                <h2>Frontend Devoloper</h2>
                <h1>Icaro <span>Jordano</span></h1>
            </div>
            <div className="logos">
                <a href="https://www.linkedin.com/in/icaro-jordano/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn></FaLinkedinIn>
                </a>
                <a href="https://wa.me/558599683-7880" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp></FaWhatsapp>
                </a>
                <a href="mailto:icarojordano08@gmail.com?" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail></AiOutlineMail>
                </a>
                <a href="https://github.com/IcaroJordano" target="_blank" rel="noopener noreferrer">
                <FaGithub></FaGithub>
                </a>
                
            </div>
            <div className="buttons">
                <button id="button2">Download CV</button>
                <button>Ver Projetos </button>
            </div>
        </section>
    )
}