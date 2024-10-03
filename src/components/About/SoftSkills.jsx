import "./SoftSkills.css"

import { CardSoftSkills } from "./CardSoftSkills"

import { FaFeatherAlt } from "react-icons/fa";
import oratoria from '../../midias/speaking.png'

export function SoftSkils() {
    return (
        <section className="soft_skills">
            {/* <h2> Soft Skills. <span className="line"> ______________</span> </h2> */}
            <h2 class="title"><FaFeatherAlt></FaFeatherAlt> Soft Skills</h2>
            <div className="cards">
                <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
                <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
                <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
                <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
            </div>
        </section>
    )
}