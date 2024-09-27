import "./About.css"
import { Apresentacao } from "./Apresentacao"
import { Slide } from "./Slide"

import { BiSpeaker } from "react-icons/bi"

export function About() {
    return(
        <section className="About">
            <Slide></Slide>
            <Apresentacao></Apresentacao>
            <div className="soft_skils">
                <BiSpeaker></BiSpeaker>
            </div>
            <div className="hard_skils"></div>
            <div className="Metodologias"></div>
        </section>
    )
}