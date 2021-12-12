import React, { useRef, useState } from 'react';
import './Contact.css'
import phone from "../../mobile_phone.png"
import email from "../../email.png"
import adress from "../../adress.png"
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone]= useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_0iux1wc', 'template_z5ks8ew', formRef.current, 'user_vHba3zf7fQt8RrP0Gbz5s')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div className="c mt-5">
           <div className="c-bg"></div>
           <div className="c-wrapper">
               <div className="c-left">
                   <h1 className="c-title">
                       Let's discuss your projects
                   </h1>
                   <div className="c-info">
                       <div className="c-info-item">
                           <img src={phone} alt="" className="c-icon" />
                           01869-068778
                       </div>
                       <div className="c-info-item">
                           <img src={email} alt="" className="c-icon" />
                           jonyh0296@gmail.com
                       </div>
                       <div className="c-info-item">
                           <img src={adress} alt="" className="c-icon" />
                           Pabna Sadar, Bangladesh
                       </div>
                   </div>
               </div>
               <div className="c-right">
                   <p className="c-desc">
                  <b> If you would like to know !!</b> more about my project, please contact me via e-mail below.
                   </p>
                   <form ref={formRef} onSubmit={handleSubmit}>
                       <input type="text" placeholder="name" name="user_name" />
                       <input type="text" placeholder="subject" name="user_subject" />
                       <input type="text" placeholder="email" name="user_email" />
                       <textarea rows="5" placeholder="Please write now you.." name="message"></textarea>
                       <button>Submit</button>
                       {done && " Your message is send.Thank you.."}
                   </form>
               </div>
           </div>
        </div>
    );
};

export default Contact;