import React from 'react';
import './About.css'
import logo from "../../logo.png"
import 'animate.css';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className="a about bg">
           <div className="a-left">
               <Fade left>
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img src="https://png.pngitem.com/pimgs/s/145-1451605_website-design-development-website-development-vector-png-transparent.png" alt="" className="a-img" />
               </div>
               </Fade>
           </div>
           <div className="a-right">
           <Fade right>
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">Hi my name is Md. Jony hossain. I am a full stack web developer.
                    programming language: JavaScript(ES6), HTML, CSS, Java
                    Framework : ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native.</p>
               <div className="a-logo">
                   <img src={logo} alt="" className="a-logo-img" />
                   <div className="a-logo-text">
                       <h4 className="a-logo-text">React</h4>
                       <p className="a-logo-desc">React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

                    </p>
                   </div>
               </div>
               </Fade>
           </div>
            
        </div>
    );
};

export default About;