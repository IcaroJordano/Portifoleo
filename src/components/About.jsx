import "./About.css"

import { Apresentacao } from "./Apresentacao"
import { HardSkills } from "./HardSkills"
import { Slide } from "./Slide"
import { SoftSkils } from "./SoftSkills"


export function About() {
    return(
        <section className="About">
            <Slide></Slide>
            <Apresentacao></Apresentacao>
            <SoftSkils></SoftSkils>
            <HardSkills></HardSkills>
            <div className="hard_skils"></div>
            <div className="Metodologias"></div>
        </section>
    )
}