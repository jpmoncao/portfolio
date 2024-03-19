import './styles.css';
import { motion } from 'framer-motion';

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
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.25, delay: 0.25 }}
                    className="circle circle-1"></motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 15 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.25, delay: 0.25 }}
                    className="circle circle-2"></motion.div>
            </article>
        </section>
    )
}