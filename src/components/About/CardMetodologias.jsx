import './CardMetodologias.css'

export function CardMetodologias({ title, children }) {
    return (
        <div className="CardMetodologias">
            <div className="top">
                <span className='icon' >{children}</span>
                <h2>{title}</h2>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate perspiciatis qui amet saepe temporibus iste iure voluptatum odio laudantium beatae possimus
                {/* <span className='mais' >Lorem ipsum dolor sit amet consectetur adipisicing elit xcepturi, quisquam!</span> */}
            </p>
            <a href="#Slide">View Example</a>
        </div>
    )
}