import "./Testimonal.css";
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: IMG1,
    name: "Person One",
    description:
      " accusantium, tempora eos aperiam temporibus. Id recusandae quasi ad cupiditate, numquam libero voluptatum inventore itaque, nemo pariatur deleniti laboriosam aut voluptas architecto repellendus omnis quo optio consequatur, dolorem possimus dignissimos.",
  },

  {
    id: 2,
    image: IMG2,
    name: "Person Two",
    description:
      " bccusantium, tempora eos aperiam temporibus. Id recusandae quasi ad cupiditate, numquam libero voluptatum inventore itaque, nemo pariatur deleniti laboriosam aut voluptas architecto repellendus omnis quo optio consequatur, dolorem possimus dignissimos.",
  },

  {
    id: 3,
    image: IMG3,
    name: "Person Three",
    description:
      " cccusantium, tempora eos aperiam temporibus. Id recusandae quasi ad cupiditate, numquam libero voluptatum inventore itaque, nemo pariatur deleniti laboriosam aut voluptas architecto repellendus omnis quo optio consequatur, dolorem possimus dignissimos.",
  },
];

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5>Reviews From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container textimonal__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, description }) => {
          return (
            <div key={id} className="textimonal__content">
              <SwiperSlide className="testimonial">
                <div className="textimonial__image">
                  <img src={image} alt={name} />
                </div>
                <b>{name}</b>
                <p> {description}</p>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
