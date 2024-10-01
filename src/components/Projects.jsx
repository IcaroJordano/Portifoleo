import { CardProjects } from "../CardProjects"
import "./Projects.css"

import { BsRocketTakeoff } from "react-icons/bs";

export function Projects() {
    return(
        <section className="projects" id="Projetos"> 
            {/* <h2>Projects. <span className="line"> ____span> </h2> */}
            <h2 class="title"><BsRocketTakeoff></BsRocketTakeoff> Projetos</h2>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
        </section>
    )
}