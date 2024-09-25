import "./Home.css"
import video from "../midias/home-video-horizontal.mp4"
import avatar from '../midias/avatar.jpeg'

// import {useMediaQuery} from "@usehooks-ts"
import { useMediaQuery } from "@uidotdev/usehooks";

import { FaGithub } from "react-icons/fa";


export function Home() {
    const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");
    return(
        <section className="Home" >
            <div className="apresentacao">
                <h1>Icaro <span>Jordano</span></h1>
                <h2>Frontend Devoloper</h2>
                <p>"Crie sua propria sorte, o sucesso vem de oportunidades e de preparacao"</p>
            </div>

            <div className="image">
                <img src={avatar} alt="" />
            </div>
            <div className="buttons">
                <button>View Work </button>
                <button id="button2">Dowload CV</button>
            </div>
            {/* <div className="logos">
                <FaGithub></FaGithub>
                <FaGithub></FaGithub>
                <FaGithub></FaGithub>
                <FaGithub></FaGithub>
            </div> */}
        </section>
    )
}