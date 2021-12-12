import React from 'react';
import './Product.css'
import Pulse from 'react-reveal/Pulse';

const Product = ({img,link}) => {
    return (
        <div className="p">
             <Pulse>
          <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="" className="p-img" />
          </a>
          </Pulse>
        </div>
    );
};

export default Product;