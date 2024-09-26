import "./Slide.css"

import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

export function Slide() {
    return(
        <section className="Slide">
            <div className="logos">
                <div className="logos_slide">
                    <TiHtml5></TiHtml5>
                    <FaCss3Alt></FaCss3Alt>
                    <TbBrandJavascript></TbBrandJavascript>
                    <FaReact></FaReact>
                    <SiTailwindcss></SiTailwindcss>
                    <FaSass></FaSass>
                </div>
                <div className="logos_slide">
                    <TiHtml5></TiHtml5>
                    <FaCss3Alt></FaCss3Alt>
                    <TbBrandJavascript></TbBrandJavascript>
                    <FaReact></FaReact>
                    <SiTailwindcss></SiTailwindcss>
                    <FaSass></FaSass>
                </div>
            </div>
        </section>
    )
}