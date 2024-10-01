import "./About.css"

import { Apresentacao } from "./About/Apresentacao"
import { HardSkills } from "./About/HardSkills"
import { Metodologias } from "./About/Metodologias"
import { Slide } from "./About/Slide"
import { SoftSkils } from "./About/SoftSkills"


export function About() {
    return(
        <section className="About" id="Sobre">
            <Slide></Slide>
            <Apresentacao></Apresentacao>
            <SoftSkils></SoftSkils>
            <HardSkills></HardSkills>
            <Metodologias></Metodologias>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed cumque possimus alias veniam officiis amet libero voluptatem dolores est itaque, ea quod blanditiis fugit assumenda, voluptate culpa aliquam! Nam?</p> */}
            {/* <div className="Metodologias"></div> */}
        </section>
    )
}