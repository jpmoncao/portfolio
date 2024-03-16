import './styles.css';

export default function Meeting() {
    return (
        <section className='Meeting'>
            <article className='text'>
                <h2>Hello World! I am</h2>
                <h1>João Pedro</h1>
                <h2>FullStack Web Developer</h2>
            </article>
            <article className='circles'>
                <img src="https://github.com/jpmoncao.png" alt="Foto de perfil de João Pedro" />
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </article>
        </section>
    )
}