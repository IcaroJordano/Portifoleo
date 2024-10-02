import "./CardProjects.css"

// import image from "./midias/image-produto.jpeg"

import { LuArrowUpRight } from "react-icons/lu";


import { AiOutlineLink } from "react-icons/ai";


export function CardProjects() {
    return(
        <div className="card_projects">
            <img src={'https://miro.medium.com/v2/resize:fit:1400/1*pVxCmIW9kV28plnkC9mpMA.jpeg'} alt="" />
            <h2>Titulo do projeto</h2>
            <div className="tags">
                <span>React</span>
                <span>Taiwind</span>
                <span>Taiwind</span>
                {/* <span>Taiwind</span>
                <span>API</span>
                <span>Taiwind</span>
                <span>API</span>
                <span>API</span> */}
            </div>
            <a href=""><AiOutlineLink className="deploy"></AiOutlineLink></a>
            <a href=""><LuArrowUpRight className="ver_mais" ></LuArrowUpRight></a>
        </div>
    )
}