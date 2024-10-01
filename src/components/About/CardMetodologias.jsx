import './CardMetodologias.css'

export function CardMetodologias({title, children}) {
    return(
        <div className="CardMetodologias">
            <div className="title">
                <span className='icon' >{children}</span>
                <h2>{title}</h2>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus hic earum consequatur officiis molestiae</p>
            <a href="#Slide">View Example</a>
        </div>
    )
}