import "./Contact.css"

import { BsPeople} from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export function Contact() {
    return(
        <section className="Contact">
            <h2 id="Contact"><BsPeople></BsPeople> Contact</h2>
            <h3>Estou disponível para novos projetos e contratações. Entre em contato e marcamos uma conversa.</h3>
            <div className="card_contact">
                <div className="top">
                    <FaWhatsapp></FaWhatsapp>              
                    <h4>Whatsapp</h4>
                </div>
                <a href="https://wa.me/558599683-7880" target="blank">+55 85 99683-7880</a>
            </div>

            <div className="card_contact">
                <div className="top">
                    <AiOutlineMail></AiOutlineMail>              
                    <h4>Email</h4>
                </div>
                <a href="mailto:icarojordano08@gmail.com?" target="blank" >icarojordano08@gmail.com</a>
            </div>
            
            <div className="card_contact">
                <div className="top">
                    <FaLinkedinIn></FaLinkedinIn>              
                    <h4>Linkedin</h4>
                </div>
                <a href="https://www.linkedin.com/in/icaro-jordano/" target="blank">https://www.linkedin.com/in/icaro-jordano/</a>
            </div>


            <div className="card_contact">
                <div className="top">
                    <FaGithub></FaGithub>              
                    <h4>Github</h4>
                </div>
                <a href="https://github.com/IcaroJordano" target="blank">https://github.com/IcaroJordano</a>
            </div>
            </section>
    )
}