import './Testimonal.css'
import avatar1 from '../../assets/avatar1.jpg';

const Testimonial = () => {
    return (
        <section id='Testimonial'>
            <h5>Reviews From Clients</h5>
            <h2>Testimonial</h2>

            <div className="container textimonal__container">
                <div className="textimonal__content">

                    <article className="testimonial">
                        <div className="textimonial__image">
                            <img src={avatar1} alt="" />
                        </div>
                        <b>Person Name</b>
                        <p> accusantium, tempora eos aperiam temporibus. Id recusandae quasi ad cupiditate, numquam libero voluptatum inventore itaque, nemo pariatur deleniti laboriosam aut voluptas architecto repellendus omnis quo optio consequatur, dolorem possimus dignissimos.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
