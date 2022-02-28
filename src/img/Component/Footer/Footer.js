import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                   
                    {/* <!--Footer About--> */}
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-about">
                            <h3>About Us</h3>
                            <p>
                            Hi my name is Md. Jony hossain. I am a full stack web developer.
                            programming language: JavaScript(ES6), HTML, CSS, Java
                            Framework : ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native
                            </p>
                            <div className="footer-social ">
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>

                                <a href="https://www.youtube.com/"><i className="fab fa-youtube social"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram social"></i></a>
                                <a href="https://www.linkedin.com/in/jony-hossain-404268227/"><i className="fab fa-linkedin-in social"></i></a>
                            </div>
                        </div>
                    </div>
                     {/* <!--Contact Us--> */}
                     <div className="col-md-6 col-lg-3">
                        <div className="footer-contact">
                            <h3>Get In Touch</h3>
                            <p><i className="fa fa-map-marker-alt"></i>Pabna sador,Bangladesh</p>
                            <p><i className="fa fa-phone-alt"></i>01869068778</p>
                            <p><i className="fa fa-envelope"></i>jonyh0296@gmail.com</p>
                            <p><i className="far fa-clock"></i>Mon - Fri, 9AM - 10PM</p>
                        </div>
                    </div>
                        {/* <!--Footer Link--> */}
                        <div className="col-md-6 col-lg-3">
                        <div className="footer-links">
                            <h3>Useful Links</h3>
                            <a href="https://github.com/Jony120455">    Github Link</a>
                            <a href="https://app.netlify.com/teams/jony120455/overview?_ga=2.158524026.1501408557.1639326763-1114497826.1629605437">Netlify</a>
                            <a href="https://www.programming-hero.com/">Programming Hero</a>
                            <a href="https://firebase.google.com/">Firebase
                            </a>
                        </div>
                    </div>
                    {/* <!--project Image--> */}
                    <div className="col-md- col-lg-3">
                        <div className="footer-project">
                            <h3>Latest Projects</h3>
                            <a href="https://assigment-10-main.web.app/"><img src="https://media.istockphoto.com/photos/bed-in-hallway-the-concept-of-working-stressful-environment-picture-id1227177907?b=1&k=20&m=1227177907&s=170667a&w=0&h=gSIg6oegHiWZ0DVjTOK2RbJFl4oFQxSKcPowmvfiiGk=" alt="" /></a>
                            <a href="https://i.ibb.co/G0SjJXP/tourest.png"><img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></a>
                            <a href="https://bike-main-11276.web.app/"><img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></a>
                            <a href="https://dell-meitner-771945.netlify.app/"><img src="https://i.pinimg.com/originals/8d/e6/4b/8de64b5a52b32331a49aa73f14209b36.jpg" alt="" /></a>
                            <a href="https://elastic-heisenberg-2130f7.netlify.app/"><img src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/184319i8F63B0720674D09A?v=v2" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
           {/* <!-- Newswletter --> */}
           <div className="container footer-newsletter">
                <p>
                If you are on a personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with malware. 
                </p>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row align-items-center">
                        
                      {/* <!--Copy Right--> */}
                      <div className="col-md-6">
                            <div className="copy-text">
                                <p>&copy; <a href="#">Full-Stack Web Developer</a>. All Rights Reserved</p>
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