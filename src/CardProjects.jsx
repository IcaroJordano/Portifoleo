import "./CardProjects.css"

import { LuArrowUpRight } from "react-icons/lu";


import { AiOutlineLink } from "react-icons/ai";


export function CardProjects({imagem}) {
    return(
        <div className="card_projects">
            <img src={imagem} alt="aa" />
            <h2>Titulo do projeto</h2>
            <div className="tags">
                <span>React</span>
                <span>Taiwind</span>
                {/* <span>Taiwind</span> */}
                {/* <span>Taiwind</span>
                <span>API</span>
                <span>Taiwind</span>
                <span>API</span>
                <span>API</span> */}
            </div>
            <a href=""><AiOutlineLink title='ver deploy' className="deploy"></AiOutlineLink></a>
            <a href=""><LuArrowUpRight title='mais sobre'className="ver_mais" ></LuArrowUpRight></a>
        </div>
    )
}