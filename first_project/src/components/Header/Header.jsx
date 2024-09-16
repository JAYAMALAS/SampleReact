import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import bfImg from "../../images/download1.png";


function Header() {
    const headerLoops = [
        {
            name: 'Home .',
            link: '/',
            Component: 'Home'

        },
        {
            name: 'About Us .',
            link: '/aboutus',
            Component: 'AboutUs'
        },
        {
            name: 'Blog .',
            link: '/blog',
            Component: 'Blog'
        },
        {
            name: 'Services .',
            link: '/services',
            Component: 'Services'
        },
        {
            name: 'Contact Us',
            link: '/contactus',
            Component: 'ContactUs'
        }

    ]
    return (

        <header >
            <div className="firstHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mr-auto">
                            <Link className="numberLink" to='tel:+880 0000 000000 '>+ 880 0000 000000</Link>
                        </div>
                        <div className="col-md-2 mx-auto">
                            <Link className="numberLink" to='mailto:Loremipsum@gmail.com' >Loremipsum@gmail.com</Link>
                        </div>
                        <div className="col-md-2 ms-auto text-center enquiry">
                            <Link  className="numberLink" to='/' >MAKE AN ENQUIRY</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondHeader">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-3 mx-auto link" >
                           <Link to='/'>AKB & ASSOCIATES</Link>
                        </div>
                        <div className="col-md-7 mx-auto">
                            <ul>
                                {headerLoops.map((headerLoop) => (
                                    <li className="homeLink"><Link to={headerLoop.link}>{headerLoop.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-2 text-end searchMenu">
                            <input type="text" placeholder="Search Here" name="search " />
                        </div>
                    </div>
                </div>
            </div>

        </header>


    );

}
export default Header;