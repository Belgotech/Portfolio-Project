import React from "react";
import "./Experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="Experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Node</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__graphics">
          <h3>Graphics Design</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Corel Draw</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Photoshop</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
