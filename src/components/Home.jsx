import React, { useRef } from "react";
import { motion, animate } from 'framer-motion' 
import Typewriter from 'typewriter-effect'    
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";  
import me from "../assets/logo.png";

const Home = () => {

 const clientCount = useRef(null);           
 const animationClientsCount = () =>{        
   animate(0, 50, {                         
     duration: 1.5,
     onUpdate: (i) => (clientCount.current.textContent = i.toFixed())  
    })
  }


 const projectCount = useRef(null);
 const animationProjectsCount = () =>{
  animate(0, 100, {
    duration: 1.5,
    onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
  })
 }
 
 const animations = {
    h1:{
        initial:{
            x: "-100%",
            opacity: 0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    },

    button:{
        initial:{
            y: "-100%",
            opacity: 0,
        },
        whileInView:{
            y:0,
            opacity:1,
        }
    }
 }


  return (
    <div id="home">     
       <section>
        <div>
          <motion.h1 {...animations.h1}> 
            Hi, I Am <br /> Majid khan
          </motion.h1>
       
            {/* typewriter text */}
          <Typewriter options={{      
           strings: ["A Developer" , "A Designer" , "A Creator"],
           autoStart: true,
           loop: true,
           cursor: "",
           wrapperClassName: "typewriterpara",    
          }} />    
          
          {/*Email & arrow icon */}
          <div>
          <a href="mailto:khan.pk91@gmail.com" >Hire Me</a>
          <a href="#work" >Projects <BsArrowUpRight /> </a>
          </div>
          
          <article>      
            <p> 
              +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          
          <aside>
           <article>
            <p>
            +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
            </p>
            <span>Projects Done</span>
           </article>
           
           <article data-special> 
            <p>
              <span>Contact</span>
            </p>
            <span>khan.pk91@gmail.com</span>
           </article>
          </aside>

        </div>
       </section>
 

     <section>
      <img src={me} alt="Majid" />
     </section>
     <BsChevronDown />
     




    </div> 
  )
}

export default Home