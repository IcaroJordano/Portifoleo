import { CardSoftSkills } from "./CardSoftSkills"
// import "../../midias/speaking.png"
import "./SoftSkills.css"
import oratoria from '../../midias/speaking.png'

export function SoftSkils() {
    return(
        <section className="soft_skills">
            <h2>Soft Skills. <span className="line"> ______________</span> </h2>
            <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
            <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
            <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
            <CardSoftSkills image={oratoria} color="#164e63" titulo={"Oratoria"}></CardSoftSkills>
        </section>
    )
}