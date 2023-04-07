import React from "react";
import { AiOutlineMenu } from "react-icons/ai";            

const Header = ({ menuOpen, setMenuOpen }) => {     
  return (
    <>
    {/* Navbar for only large screen */}
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />   
      </nav>

         {/* Humburger Button for only small screen*/}
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};




// Navbar Component
const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Web Dev.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">   
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:khan.pk91@gmail.com"> <button>Email</button> </a>
  </>
);

export default Header;


export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {           
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}> 
      <NavContent setMenuOpen={setMenuOpen} />                         
    </div>
  );
};