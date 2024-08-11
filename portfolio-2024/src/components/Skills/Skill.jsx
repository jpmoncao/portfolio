export default function Skill(props, key) {
    const activeStars = [0, 1, 2, 3, 4]

    return (
        <article className="Skill" htmlFor={`switch-${props.name ?? ''}`}>
            <div className="skill-front skill-card">
                <img className="skill-img" src={props.imgContent} alt={`Logo da tecnologia ${props.name}`} />
            </div>
            <div className="skill-back skill-card">
                <div className="skill-card-title">
                    <img className="skill-img-xs" src={props.imgContent} alt={`Logo da tecnologia ${props.name}`} />
                    <h2>{props.name}</h2>
                </div>
                <p>{props.description}</p>
                <div>
                    {activeStars.map((value, index) => {
                        return <span key={index}>
                            <img
                                src="icons/star.svg"
                                height={16}
                                style={{ opacity: index + 1 > props.level ? 0.4 : 1 }}
                            />
                        </span>
                    })}
                </div>
            </div>
        </article>
    )
}