import { CardProjects } from "../CardProjects"
import "./Projects.css"

import image from "../midias/image-produto.jpeg"
import { BsRocketTakeoff } from "react-icons/bs";

export function Projects() {
    return(
        <section className="projects" id="Projetos"> 
            {/* <h2>Projects. <span className="line"> ____span> </h2> */}
            <h2 class="title"><BsRocketTakeoff></BsRocketTakeoff> Projetos</h2>
            <div className="cards">
            <CardProjects imagem={image}></CardProjects>
            <CardProjects imagem={'https://miro.medium.com/v2/resize:fit:1400/1*pVxCmIW9kV28plnkC9mpMA.jpeg'}></CardProjects>
            <CardProjects imagem={image}></CardProjects>
            <CardProjects imagem={image}></CardProjects>
            <CardProjects imagem={image}></CardProjects>
            <CardProjects imagem={image}></CardProjects>
            </div>
        </section>
    )
}