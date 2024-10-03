import "./CardSoftSkills.css"


export function CardSoftSkills({ image, color, titulo }) {
    return (
        <div className="card_soft_skills">
            <img src={image} style={{ backgroundColor: `${color}` }} alt="" />
            <h2>{titulo}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore quibusdam perferendis,
                <span className="mais" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore quibusdam perferendis,</span>
            </p>
        </div>
    )
}