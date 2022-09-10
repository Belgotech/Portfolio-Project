import "./Service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="Service">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container service__container">
        <div className="service__content">
        

        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Reponsive Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Interactive Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Exclusively Designed/Styled Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Unique Web Pages That Stands out From The Crowd</p>{" "}
            </li>
          </ul>
        </article>

        

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Reponsive Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Interactive Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Exclusively Designed/Styled Web Pages</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Unique Web Pages That Stands out From The Crowd</p>{" "}
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Exclusive Research</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Optimized Keywords</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Easily Understanable Content That Passes The Supposed Information</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Unique Contents That Stands out From The Crowd</p>{" "}
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Exclusive Design</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Simple But Interactive Design</p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Unique Design That Stands out From The Crowd</p>{" "}
            </li>
          </ul>
        </article>


        </div>
      </div>
    </section>
  );
};

export default Service;
