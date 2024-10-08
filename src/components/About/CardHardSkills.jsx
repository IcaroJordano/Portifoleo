import "./CardHardSkills.css"

export function CardHardSkills({image, title}) {
    return(
        <div className="card_hard_skills" title={title}>
            <img src={image} alt={title}  />
            <h3>{title}</h3>
        </div>
    )
}