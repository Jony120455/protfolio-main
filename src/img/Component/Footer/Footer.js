import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                   
                    {/* <!--Footer About--> */}
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-about">
                            <h3>About Us</h3>
                            <p>
                            Hi my name is Md. Jony hossain. I am a full stack web developer.
                            programming language: JavaScript(ES6), HTML, CSS, Java
                            Framework : ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native
                            </p>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                     {/* <!--Contact Us--> */}
                     <div class="col-md-6 col-lg-3">
                        <div class="footer-contact">
                            <h3>Get In Touch</h3>
                            <p><i class="fa fa-map-marker-alt"></i>Pabna sador,Bangladesh</p>
                            <p><i class="fa fa-phone-alt"></i>01869068778</p>
                            <p><i class="fa fa-envelope"></i>jonyh0296@gmail.com</p>
                            <p><i class="far fa-clock"></i>Mon - Fri, 9AM - 10PM</p>
                        </div>
                    </div>
                        {/* <!--Footer Link--> */}
                        <div class="col-md-6 col-lg-3">
                        <div class="footer-links">
                            <h3>Useful Links</h3>
                            <a href="">Lorem ipsum</a>
                            <a href="">tempus posuere </a>
                            <a href="">velit id accumsan</a>
                            <a href="">ut porttitor</a>
                            <a href="">Nam pretium</a>
                            <a href="">accumsan</a>
                        </div>
                    </div>
                    {/* <!--project Image--> */}
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-project">
                            <h3>Latest Projects</h3>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            {/* <a href=""><img src="img/img-1.jpg" alt="Image"></a>
                            <a href=""><img src="img/img-2.jpg" alt="Image"></a>
                            <a href=""><img src="img/img-3.jpg" alt="Image"></a>
                            <a href=""><img src="img/img-4.jpg" alt="Image"></a>
                            <a href=""><img src="img/img-5.jpg" alt="Image"></a>
                            <a href=""><img src="img/img-6.jpg" alt="Image"></a> */}
                        </div>
                    </div>
                </div>
            </div>
            
           {/* <!-- Newswletter --> */}
           <div class="container footer-newsletter">
                <p>
                    Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros 
                </p>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row align-items-center">
                        
                      {/* <!--Copy Right--> */}
                      <div class="col-md-6">
                            <div className="copy-text">
                                <p>&copy; <a href="#">Foolish Developer</a>. All Rights Reserved</p>
                            </div>
                        </div>
                        {/* <!--Footer Menu--> */}
                        <div className="col-md-6">
                            <div className="copy-menu">
                                <a href="">About</a>
                                <a href="">Terms</a>
                                <a href="">Privacy</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;