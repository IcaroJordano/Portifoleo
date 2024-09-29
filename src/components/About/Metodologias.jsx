import { CardMetodologias } from './CardMetodologias'
import './Metodologias.css'
import { BsRocketTakeoff } from "react-icons/bs";

import { AiOutlinePullRequest } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";


import { FaGitAlt } from "react-icons/fa";


export function Metodologias() {
    return(
    <section className="metodologias">
        <h2 className='titulo'><span className="line"> ________________________</span> <br></br>Metodologias e Praticas de Desenvolvimento.  </h2>
        <CardMetodologias title={'GIT FLOW'}>
            <AiOutlineBranches></AiOutlineBranches>
        </CardMetodologias>
        
        <CardMetodologias title={'GITHUB FLOW'}>
            <AiOutlinePullRequest></AiOutlinePullRequest>
        </CardMetodologias>

        <CardMetodologias title={'MOBILE FIRST'}>
            <BiMobileAlt></BiMobileAlt>
        </CardMetodologias>

    </section>
    )
}