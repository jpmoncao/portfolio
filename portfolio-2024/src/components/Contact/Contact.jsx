import './styles.css';
import Form from './Form';

export default function Contact() {
    return (
        <section className='Contact'>
            <article className='title'><h1>Contact me!</h1></article>
            <section className='info'>
                <aside className='contact-aside'>
                    <article>
                        <img src="/icons/whatsapp.svg" alt="Ícone do Whatsapp" />
                        <div>
                            <h2>Whatsapp</h2>
                            <p>(17) 98811-6153</p>
                        </div>
                    </article>
                    <article>
                        <img src="/icons/email.svg" alt="Ícone de Email" />
                        <div>
                            <h2>E-mail</h2>
                            <p>pedrohojoao44@gmail.com</p>
                        </div>
                    </article>
                </aside>

                <Form />
            </section>
            <footer>dev by <a target="_blank" href="https://github.com/jpmoncao">João Pedro Monção</a></footer>
        </section>
    );
}
