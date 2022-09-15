import './Contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { BsWhatsapp } from 'react-icons/bs';
// import { BsWhatsapp } from 'react-icons/bs';
// import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8algnex', 'template_okm1g28', form.current, 'JNGr6vRNsqqCnj7YV')

            e.target.reset()

          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
       <section id='Contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        
        <div className="container contact__container">

            <div className="contact__socials">
                <article className="socials">
                    {/* < /> */}
                    <h3>Eamail</h3>
                    <h5>Belovedobiora2002@gmail.com</h5>
                    <a href="mailto:belovedobiora2002@gmail.com" target="_blank">Send A Message</a>
                </article>
                <article className="socials">
                    {/* < /> */}
                    <h3>Messenger</h3>
                    <h5>Be Loved</h5>
                    <a href="https://m.me/slendid.king" target="_blank">Send A Message</a>
                </article>
                <article className="socials">
                    <BsWhatsapp />
                    <h3>Whatsapp</h3>
                    <h5>+2349064293424</h5>
                    <a href="https://api.whatsapp.com/send?phone=+2349064293424" target="_blank">Send A Message</a>
                </article>
            </div>

            <div className="contact__forms">
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <input type="text" name='name' placeholder='Your Full NAme' required/>
                    <input type="text" name='email' placeholder='Your Email' required/>
                    <textarea name='message' cols="40" rows="8" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </div>
       </section>
    )
}

export default Contact
