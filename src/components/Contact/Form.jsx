import './styles.css';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';

const userID = import.meta.env.VITE_USER_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;
const reply_to = import.meta.env.VITE_REPLY_TO;

export default function Form() {
    const sendEmail = (e) => {
        e.preventDefault();

        try {
            const name = e.target.querySelector('#from_name').value;
            const email = e.target.querySelector('#from_email').value;
            const message = e.target.querySelector('#message').value;

            if (name.trim() === '') {
                toast.error('O nome é um campo obrigatório');
                return;
            }

            if (email.trim() === '') {
                toast.error('O email é um campo obrigatório');
                return;
            }

            if (message.trim() === '') {
                toast.error('A mensagem é um campo obrigatório');
                return;
            }

            toast.promise(
                emailjs.sendForm(
                    serviceID,
                    templateID,
                    e.target,
                    userID
                ),
                {
                    loading: 'Enviando...',
                    success: 'E-mail enviado com sucesso!',
                    error: 'Falha ao enviar o e-mail!',
                }
            );

            e.target.reset();
        } catch (error) {
            console.error('Erro: ' + error)
            toast.error('Erro interno no servidor');
            return;            
        }
    }


    return (
        <form onSubmit={sendEmail}>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                    style={{
                        background: '#333',
                        color: '#fff',
                    }}
                />
            </div>
            <input type="text" name="from_name" id="from_name" placeholder='Your name' />
            <input type="email" name="from_email" id="from_email" placeholder='Your email' />
            <input type="hidden" name="reply_to" id="reply_to" value={reply_to} />
            <textarea name="message" id="message" placeholder='Type your message...'></textarea>
            <button type='submit'>Send</button>
        </form>
    )
}