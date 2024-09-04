import './styles.css';
import emailjs from 'emailjs-com';

// const userID = process.env.REACT_APP_USER_ID;
// const templateID = process.env.REACT_APP_TEMPLATE_ID;
// const serviceID = process.env.REACT_APP_SERVICE_ID;

const userID = '_9N8E1ywTFsrFbJ2P'
const templateID = 'template_jush1m5'
const serviceID = 'service_xe5urbr'

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        userID
    )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}


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

                <form onSubmit={sendEmail}>
                    <input type="text" name="name" id="name" placeholder='Your name' />
                    <input type="email" name="email" id="email" placeholder='Your email' />
                    <textarea name="message" id="message" placeholder='Type your message...'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </section>
            <footer>dev by <a href="https://github.com/jpmoncao">João Pedro Monção</a></footer>
        </section>
    );
}
