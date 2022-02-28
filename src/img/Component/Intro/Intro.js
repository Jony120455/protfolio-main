import React from 'react';
import './Intro.css'
import Me from '../../jony.png'
import About from '../About/About';
import ProductList from '../ProductList/ProductList';
import Contact from '../Contact/Contact';
import Progress from '../Progress/Progress';
import Footer from '../Footer/Footer';

const Intro = () => {
    return (
        <div className="Intro bg sm">
            <div className="i overflow-hidden">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">
                        Hello, my name is
                    </h2>
                    <div className="animated-text">
                        <div>
                            <span>MD. JONY HOSSAIN</span>
                        </div>
                    </div>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">Web designer</div>
                            <div className="i-title-item">Ui/developer</div>
                            <div className="i-title-item">Graphic designer</div>
                        </div>
                    </div>
                    <div className="i-desc">Hi my name is Md. Jony hossain. I am a full stack web developer.
                    programming language: JavaScript(ES6), HTML, CSS, Java
                    Framework : ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native</div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">    
                </div>
                <img src={Me} alt="" className="i-img" />
            </div>
            </div>
            <About></About>
            <ProductList></ProductList>
             <Progress></Progress>
            <Contact></Contact>
            <Footer></Footer>
        </div>
        
    );
};

export default Intro;