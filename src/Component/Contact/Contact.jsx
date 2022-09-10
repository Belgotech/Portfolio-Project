import './Contact.css';

const Contact = () => {
    return (
       <section id='Contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        
        <div className="container contact__container">

            <div className="contact__socials">
                <article className="socials">
                    <h3>Eamail</h3>
                    <h5>Belovedobiora2002@gmail.com</h5>
                    <a href="#">Send A Message</a>
                </article>
                <article className="socials">
                    <h3>Messenger</h3>
                    <h5>Be Loved</h5>
                    <a href="#">Send A Message</a>
                </article>
                <article className="socials">
                    <h3>Whatsapp</h3>
                    <h5>09064293424</h5>
                    <a href="#">Send A Message</a>
                </article>
            </div>

            <div className="contact__forms">
                <form action="#">
                    <input type="text" placeholder='Your Full NAme'/>
                    <input type="text" placeholder='Your Email'/>
                    <textarea name="Your Message" id="" cols="40" rows="10" placeholder='Your Message'></textarea>
                </form>
                <a href="#" className='btn btn-primary'>Send Message</a>
            </div>
        </div>
       </section>
    )
}

export default Contact
