import { motion } from 'framer-motion';

import { variants } from '../../utils/variants';

import './styles.css';

export default function Navigator() {
    return (
        <section className='Navigator'>
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
                >FullStack Web Developer</motion.h2>
            </article>
        </section>
    )
}