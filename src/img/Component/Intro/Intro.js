import React from 'react';
import './Intro.css'
import Me from '../../jony.png'

const Intro = () => {
    return (
        <div className="i overflow-hidden">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">
                        Hello, my name is
                    </h2>
                    <h1 className="i-name">MD. JONY HOSSAIN</h1>
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
    );
};

export default Intro;