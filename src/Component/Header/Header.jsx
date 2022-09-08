import React from "react";
import Headersocials from './Headersocials';
import "./Header.css";
import CTA from "./CTA/CTA";
import me from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Beloved Obiora</h1>{" "}
          <ul className="text-light">
            {" "}
            <li data-text="Full-Stack Developer">
              <span>Full-Stack Developer</span>
            </li>
          </ul>
        <CTA /> <div className="stroke">
        <Headersocials />
        <div className="me">
          <img src={me} alt="This is my picture" />
        </div></div>
        <a href="#Contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
