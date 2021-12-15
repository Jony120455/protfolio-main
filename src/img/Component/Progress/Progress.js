import React from 'react';
import './Progress.css'
import Bounce from 'react-reveal/Bounce';

const Progress = () => {
    
    return (
        
        <div className="bg">
            
            <div class="container">
            <Bounce left>
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>90<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">Html</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>90<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">CSS</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>85<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">JavaScript</h2>
          </div>
        </div>
        </Bounce>
      </div>
      
      <div className="container mt-5">
      <Bounce right>
      <div className="card card-c">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>95<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">Bootstrap</h2>
          </div>
        </div>
        <div className="card card-b">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>85<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">Tailwind</h2>
          </div>
        </div>
        <div className="card card-a">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>90<span>%</span></h2>
              </div>
            </div>
            <h2 className="text">React</h2>
          </div>
        </div> 
        </Bounce>
      </div>
     
        </div>
      
        
    );
};

export default Progress;