import { motion } from 'framer-motion';

import { variants } from '../../utils/variants';

import './styles.css';

export default function Meeting() {
    const circleStyle = {
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        width: '100%'
    }

    return (
        <section className='Meeting'>
            <article className='text'>
                <motion.h2
                    initial={variants.FadeInitial}
                    animate={variants.FadeAnimate}
                    transition={{ duration: 0.75, delay: 0.25 }}
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
                >Software Developer</motion.h2>
            </article>
            <article className='circles-container'>
                <article className='social-icons'>
                    <motion.a
                        href='https://www.linkedin.com/in/jpmoncao'
                        target='_blank'
                        initial={variants.DownToTopInitial}
                        animate={variants.DownToTopAnimate}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0,
                                delay: 0
                            }
                        }}
                        style={{ marginTop: '-0.5rem' }}
                    >
                        <img src='icons/linkedin.svg' />
                    </motion.a>
                    <motion.a
                        href='https://github.com/jpmoncao'
                        target='_blank'
                        initial={variants.DownToTopInitial}
                        animate={variants.DownToTopAnimate}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0,
                                delay: 0
                            }
                        }}
                    >
                        <img src='icons/github.svg' />
                    </motion.a>
                    <motion.a
                        href='/docs/cv.pdf'
                        target='_blank'
                        // download={true}
                        initial={variants.DownToTopInitial}
                        animate={variants.DownToTopAnimate}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0,
                                delay: 0
                            }
                        }}
                    >
                        <img src='icons/curriculum.svg' />
                    </motion.a>
                </article>
                <article className='circles'>
                    <motion.img
                        src="https://github.com/jpmoncao.png"
                        alt="Foto de perfil de João Pedro"
                        initial={variants.rightToLeftInitial}
                        animate={variants.rightToLeftAnimate}
                        transition={{ duration: 0.5, delay: 0.5 }}
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
                        transition={{ duration: 0.5, delay: 0.75 }}
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
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{
                            ...circleStyle,
                            zIndex: 2,
                            backgroundColor: 'var(--aquamarine)',
                            boxShadow: 'inset 0px 0px 4px var(--aquamarine)',
                        }}
                    />
                </article>
            </article>
        </section>
    )
}