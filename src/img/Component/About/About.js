import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import logo from "../../logo.png"


const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img src="https://png.pngitem.com/pimgs/s/145-1451605_website-design-development-website-development-vector-png-transparent.png" alt="" className="a-img" />
               </div>
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In odio provident voluptates? Dolorem, esse laborum.</p>
               <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ea voluptatum debitis iusto illum modi facilis rem. Ratione voluptas, corrupti ducimus odio rerum voluptates modi.</p>
               <div className="a-logo">
                   <img src={logo} alt="" className="a-logo-img" />
                   <div className="a-logo-text">
                       <h4 className="a-logo-text">Lorem repellendus.</h4>
                       <p className="a-logo-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium!</p>
                   </div>
               </div>
           </div>
            
        </div>
    );
};

export default About;