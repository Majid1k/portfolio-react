import React from "react";
import img from "../assets/img.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
        />

        <h2>Majid Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <article>
          <a href="https://www.linkedin.com/in/3bb35723a/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Majid1k" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;