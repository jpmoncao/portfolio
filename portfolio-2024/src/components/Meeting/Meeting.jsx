import './styles.css';
import { motion } from 'framer-motion';

export default function Meeting() {
    const circleStyle = {
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        minWidth: 'calc(50vw / 3)',
        minWeight: 'calc(50vw / 3)',
        width: '100%'
    }

    const variants = {
        rightToLeftInitial: { x: 25, opacity: 0}, 
        rightToLeftAnimate: { x: 0, opacity: 1}, 
        LeftToRightInitial: { x: -25, opacity: 0}, 
        LeftToRightAnimate: { x: 0, opacity: 1}, 
        DownToTopInitial: { y: 25, opacity: 0}, 
        DownToTopAnimate: { y: 0, opacity: 1}, 
        FadeInitial: { opacity: 0}, 
        FadeAnimate: { opacity: 1}, 
    }

    return (
        <section className='Meeting'>
            <article className='text'>
                <motion.h2
                    initial={variants.FadeInitial}
                    animate={variants.FadeAnimate}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >Hello World! I am</motion.h2>
                <motion.h1
                    initial={variants.DownToTopInitial}
                    animate={variants.DownToTopAnimate}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >João Pedro</motion.h1>
                <motion.h2
                    initial={variants.LeftToRightInitial}
                    animate={variants.LeftToRightAnimate}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >FullStack Web Developer</motion.h2>
            </article>
            <article className='circles'>
                <motion.img 
                    src="https://github.com/jpmoncao.png" 
                    alt="Foto de perfil de João Pedro" 
                    initial={variants.rightToLeftInitial}
                    animate={variants.rightToLeftAnimate}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    style={{   
                        ...circleStyle,
                        zIndex: 4,
                        backgroundColor: 'var(--mint)',
                        boxShadow: 'inset 0px 0px 4px var(--mint)',
                        left: '10vw',
                    }}
                />
                <motion.div
                    initial={variants.rightToLeftInitial}
                    animate={variants.rightToLeftAnimate}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{   
                        ...circleStyle,
                        zIndex: 3,
                        backgroundColor: 'var(--persiangreen)',
                        boxShadow: 'inset 0px 0px 4px var(--persiangreen)',
                        left: '5vw'
                    }}
                />
                <motion.div
                    initial={variants.rightToLeftInitial}
                    animate={variants.rightToLeftAnimate}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    style={{ 
                        ...circleStyle,
                        zIndex: 2,
                        backgroundColor: 'var(--aquamarine)',
                        boxShadow: 'inset 0px 0px 4px var(--aquamarine)',
                    }}
                />
            </article>
        </section>
    )
}