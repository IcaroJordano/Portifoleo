import "./About.css"

import { FaGithub } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";

export function About() {
    return(
        <section className="About">
            <div className="logos">
                <div className="logos_slide">
                    <TiHtml5></TiHtml5>
                    <TiHtml5></TiHtml5>
                    <FaGithub></FaGithub>
                    <FaGithub></FaGithub>
                    <FaGithub></FaGithub>
                </div>
                <div className="logos_slide">
                    <TiHtml5></TiHtml5>
                    <TiHtml5></TiHtml5>
                    <FaGithub></FaGithub>
                    <FaGithub></FaGithub>
                    <FaGithub></FaGithub>
                </div>
                {/* <ul className="animation">
                        <li><TiHtml5></TiHtml5></li>
                        <li><FaGithub></FaGithub></li>
                        <li><FaGithub></FaGithub></li>
                        <li><FaGithub></FaGithub></li>
                </ul> */}
            </div>
        </section>
    )
}