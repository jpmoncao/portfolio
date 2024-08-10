export default function Skill(props) {
    const activeStars = [0, 1, 2, 3, 4]

    return (
        <article className="Skill">
            <img className="skill-img" src={props.imgContent} alt={`Logo da tecnologia ${props.name}`} />
            <span style={{ display: 'none' }}>
                <h2>{props.name}</h2>
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
            </span>
        </article>
    )
}