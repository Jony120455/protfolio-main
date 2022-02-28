import React from 'react';
import Product from '../Product/Product';
import './ProductList.css'
import {products} from "../../../Data";
import Footer from '../Footer/Footer';

const ProductList = () => {
    return (
        <div>
            <div className="pl bg">
           
           <div className="pl-text">
               <h1 className="pl-title">MY PROJECTS HERE...</h1>
               <p className="pl-desc">There are some projects here. Please click the card and see deatils.. </p>
           </div>
           <div className="pl-list">
               {products.map((item) =>(
               <Product key={item.id} img={item.img} link={item.link}/>
               ))}    
           </div>
       </div>
        </div>
    );
};

export default ProductList;