import React from "react";
import "./About.css";
import aboutme from "../../assets/aboutme.png";

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutme} alt="About Image" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon"/> */}
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className="about__card">
              {/* <FiUsers className="about__icon"/> */}
              <h5>Clients</h5>
              <small>Many</small>
            </article>
            <article className="about__card">
              {/* <VscFolderLibrary className="about__icon"/> */}
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          <b> My name is Beloved Ugochukwu Obiora </b> <br />
            I'm a Full-Stack web developer and a Graphics Designer. 
            And am also a tech enthuastics who loves and belives in simplified,
            exceptional and creative solutions. With the vision of profering
            simplified solution of real time problems that humanity is facing,
            thereby making life on plannet Earth easy for mankind.
          </p>

          <a href="#Contact" className="btn btn-primary">
            lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
