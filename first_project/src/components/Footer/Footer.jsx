import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    const AboutLoops = [
        {
            name: 'About us',
            Component: 'About'
        },
        {
            name: 'Services',
            Component: 'Service'
        },
        {
            name: 'Blog',
            Component: 'Blog'
        },
        {
            name: 'Contact us',
            Component: 'Contact'
        },

    ]
    return (
        <footer>
            <div className="footerPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 footerPagediv">
                            <p className="footerPagepara">Have any questions or <b>need any business consultation?</b></p>
                        </div>
                        <div className="col-md-2 footerDiv">
                            <Link to='#' className="footerDivlink">Make an enquiry</Link>
                        </div>
                        <hr />
                        <div className="col-md-3 footerMid">
                            <h5 className="footerMidhead">AKB & Associates</h5>
                            <p className="footerMidpara">
                                binary is a global consulting firm with a twist.
                                We bring big ideas and challenge the norm.
                                We work with clients.
                            </p>
                        </div>
                        <div className="col-md-3 footerMid">
                            <h5 className="footerMidhead">Quick Links</h5>
                            <ul>
                                {AboutLoops.map((AboutLoop) =>
                                (
                                    <li className="footerList">
                                        <Link className="footerLink" to='/'>{AboutLoop.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3 footerMid">   
                            <h5 className="footerMidhead">Latest News</h5> 
                            <p  className="footerMidpara">
                                Lorem ipsum dolor sit amet,consecuter
                                <span className="footerMidspan">23 feb,2016 / Business</span>
                            </p>    
                            <p  className="footerMidpara">
                                Lorem ipsum dolor sit amet,consecuter
                               <span className="footerMidspan">23 feb,2016 / Business</span> 
                            </p>  
                        </div>  
                        <div className="col-md-3 footerMid">
                        <h5 className="footerMidhead">Our Address</h5> 
                        <Link className="footerMidlink" to='/'>Location</Link>
                        <Link className="footerMidlink" to='tel:+880 0000 000000 '>+ 880 0000 000000</Link>
                        <Link className="footerMidlink" to='/'>Loremipsum@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}
export default Footer;