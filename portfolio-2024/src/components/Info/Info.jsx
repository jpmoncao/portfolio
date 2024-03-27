import { useEffect } from "react";
import { useScroll, motion } from "framer-motion";

import './styles.css';

export default function Info() {
    const { scrollYProgress } = useScroll();

    return (
        <section className='Info'>
            <article className='text'>
                <motion.h1
                    style={{ scaleY: scrollYProgress }}
                    transition={{ delay: 0.5 }}
                >About.me()</motion.h1>
            </article>
        </section >
    )
}