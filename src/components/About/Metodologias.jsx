import { CardMetodologias } from './CardMetodologias'
import './Metodologias.css'
import { BsRocketTakeoff } from "react-icons/bs";

import { AiOutlinePullRequest } from "react-icons/ai";


import { FaGitAlt } from "react-icons/fa";


export function Metodologias() {
    return(
    <section className="metodologias">
        <CardMetodologias title={'GT FLOW'}>
            <FaGitAlt></FaGitAlt>
        </CardMetodologias>
        
        <CardMetodologias title={'GITHUB FLOW'}>
            <AiOutlinePullRequest></AiOutlinePullRequest>
        </CardMetodologias>
    </section>
    )
}