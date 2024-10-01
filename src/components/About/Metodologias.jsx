import './Metodologias.css'

import { CardMetodologias } from './CardMetodologias'

import { AiOutlinePullRequest } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";

export function Metodologias() {
    return(
    <section className="metodologias">
        {/* <h2 className='titulo'><span className="line"> ________________________</span> <br></br>Metodologias e Praticas de Desenvolvimento.  </h2> */}
        <h2 class="title"><BiCodeBlock></BiCodeBlock> Soft Skills</h2>

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