import "./About.css"

import { Apresentacao } from "./About/Apresentacao"
import { HardSkills } from "./About/HardSkills"
import { Slide } from "./About/Slide"
import { SoftSkils } from "./About/SoftSkills"


export function About() {
    return(
        <section className="About">
            <Slide></Slide>
            <Apresentacao></Apresentacao>
            <SoftSkils></SoftSkils>
            <HardSkills></HardSkills>
            <div className="Metodologias"></div>
        </section>
    )
}