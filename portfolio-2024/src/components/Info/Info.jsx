import React, { useState, useEffect } from "react";
import { retornaIdade } from "../../utils/functions";
import './styles.css';

export default function Info() {
    const [active, setActive] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        async function getContentPages() {
            try {
                const response = await fetch('./src/text.json', {
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const data = await response.json();
                setPages(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        }

        getContentPages();
    }, []);

    function renderText(text) {
        if (!text) return '';

        const idade = retornaIdade(2006, 6, 10);
        const anos_experiencia = retornaIdade(2023, 5, 2);

        if (text.length < 2) {
            const part = text[0];
            const desc = part.desc
                .replace('||idade||', idade)
                .replace('||experiencia||', anos_experiencia);

            return part.href ? (
                <p className="text-content-container"><a target="_blank" href={part.href}>{desc}</a></p>
            ) : (
                <p className="text-content-container">{desc}</p>
            );
        } else {
            return (
                <ul className="text-content-container">
                    {text.map((part, index) => {
                        const desc = part.desc
                            .replace('||idade||', idade)
                            .replace('||experiencia||', anos_experiencia);

                        return part.href ? (
                            <li key={index}><a target="_blank" href={part.href}>{desc}</a></li>
                        ) : (
                            <li key={index}>{desc}</li>
                        );
                    })}
                </ul>
            );
        }
    }

    return (
        <section className='Info'>
            <section className='Navigator'>
                {pages.map((page, index) => (
                    <button
                        key={index}
                        id={`button-${index + 1}`}
                        className={`${active === index + 1 ? 'active' : ''}`}
                        onClick={() => setActive(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </section>

            <article className='text'>
                {pages.length > 0 && pages[active - 1] && pages[active - 1].content && (
                    <>
                        <h1>{pages[active - 1].title}</h1>
                        <h2>{pages[active - 1].subtitle}</h2>
                        {renderText(pages[active - 1].content)}
                    </>
                )}
            </article>
        </section>
    );
}
