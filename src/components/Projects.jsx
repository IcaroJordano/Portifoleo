import { CardProjects } from "../CardProjects"
import "./Projects.css"

export function Projects() {
    return(
        <section className="projects" id="Projetos"> 
            <h2>Projects. <span className="line"> ______________</span> </h2>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
        </section>
    )
}