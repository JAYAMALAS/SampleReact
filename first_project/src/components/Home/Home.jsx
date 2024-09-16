import React, { Component } from "react";
import bfImg from "../../images/download1.png";
import homeImg from "../../images/download2.png";
import profile from "../../images/download3.png";
import profileImg from "../../images/download4.png";
import microsoftImg from "../../images/microsoft.png";
import appleImg from "../../images/apple.png";
import hboImg from "../../images/hbo.png";
import hitachiImg from "../../images/hitachi.png";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
    const buttonLoops = [
        {
            name: 'INCORPORATION',
            Component: 'Incorporation',
            image:""
        },
        {
            name: 'CORPORATE GOVERNANCE',
            Component: 'Corporate'
        },
        {
            name: 'DRAFTING OF AGREEMENTS',
            Component: 'Drafting'
        },
        {
            name: 'CBL/NCLT/NCLAT MATTERS',
            Component: 'Cbl'
        },
        {
            name: 'CORPORATE SOCIAL RESPONSIBILITY',
            Component: 'CoporateSocial'
        }

    ]
    const midButtonloops = [
        {
            name: 'SCHEME & POLICY MATTERS',
            Component: 'Scheme'
        },
        {
            name: 'SECRETARIAL MATTERS',
            Component: 'Secretarial'
        },
        {
            name: 'COMPANY MATTERS',
            Component: 'Company'
        },
        {
            name: 'OUTSOURCING SERVICES FOR',
            Component: 'Outsourcing'
        }
    ]
    return (
        <>
            <div className="midPage" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 midPageheading">
                            <h1>Corporate <b>Secretarial
                                Services</b></h1>
                            <p>Our Coperate Secretarial Services assists clients to manage
                                and mitigate risks of corporate non-compliance.
                            </p>
                            <button className="buttonBox">Read More</button>
                        </div>
                        <div className="col-md 7">
                            <img src={bfImg} height={500} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondMid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 secondMidHeading">
                            <h1>Our <b>Specialised Services</b></h1>
                        </div>
                        <div className="col-md-6 secondMidButtons">
                            {buttonLoops.map((buttonLoop) =>
                                (<button className="secondMidButton">{buttonLoop.name}</button>))}
                            <div className="secondMidsection ">
                                <p className="secondMidPara text-center">Have Any question Call Us Now
                                    <Link className="secondMidlinks" to="tel:+880 456 334 345"><b>+880 456 334 345</b> </Link>
                                    <Link className="secondMidlink" to="#"><b>MORE DETAILS</b></Link></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>

            <div className="thirdMid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={homeImg} height={500} />
                        </div>
                        <div className="col-md-4 thirdMiddivision">
                            <h2 className="thirdMidheading">Wide <b>range of services</b></h2>
                            {midButtonloops.map((midButtonloop) =>
                                (<button className="thirdMidbutton">{midButtonloop.name}</button>)
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourthMid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 fourthMidparas">
                            <p>We Have <b>Great Achievement To Show!!</b></p>
                        </div>
                        <div className="col-md-9 fourthMidpara">
                            <div className="row">
                                <div className="col-md-3 fourthParadiv">
                                    <p className="fourthPara">1,780+</p>
                                    <p className="fourthPara1">Completed Projects</p>
                                </div>
                                <div className="col-md-3 fourthParadiv">
                                    <p className="fourthPara">850</p>
                                    <p className="fourthPara1">World Wide Client</p>
                                </div>
                                <div className="col-md-3 fourthParadiv">
                                    <p className="fourthPara">3,260+</p>
                                    <p className="fourthPara1">Architecture & Worker</p>
                                </div>
                            </div>
                            <div className="col-md-6 fourthParaLinks">
                                <p className="fourthParaLink">Need Any Business Solution?
                                    <Link className="fourthLink" to='#' >Call Us Now</Link>Or
                                    <Link className="fourthLink" to='#' >Send Message</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fifthMid">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 fifthMidheading">
                            <h1 className="fifthHeading">Our <b>Dedicated Team</b></h1>
                            <p className="fifthMidpara">
                                We have expert ready to provide the best
                                experience services!!
                            </p>
                        </div>
                        <div className="col-md-4 fifthMidimage">
                        <img src={profile} height={170} />
                            <p className="fifthMidimagepara">A.Ajay Kumar Bantia</p>
                            <p className="fifthMidimagepara1">Founding Managing Partner</p>
                        </div>
                        <div className="col-md-4 fifthMidimage">
                        <img src={profile} height={170} />
                            <p className="fifthMidimagepara">M Prathyusha</p>
                            <p className="fifthMidimagepara1">Founding Managing Partner</p>
                        </div>
                        <div className="col-md-4 fifthMidimage">
                        <img src={profile} height={170} />
                            <p className="fifthMidimagepara">A.Ajay Kumar Bantia </p>
                            <p className="fifthMidimagepara1">Founding Managing Partner</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="sixthMid">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 sixthMiddiv">
                            <h1  className="sixthHeading">What <b>Client Say</b></h1>
                        </div>
                    
                        <div className="col-md-4 sixthMiddiv1 me-auto">
                            <p className="sixthMidpara">
                                The heights by great men reached kept attaine
                                by sudden flight,but the whole companion slept
                                were tooiling upward in the night.
                            </p>
                            <img src={profileImg} height={50}/>
                            <p className="sixthMidparags">ASH LEE
                                 <span className="sixthMidspan">Senior UI/Ux Designer</span></p>
                        </div>
                        <div className="col-md-4 sixthMiddiv1">
                        <p className="sixthMidpara">
                                The heights by great men reached kept attaine
                                by sudden flight,but the whole companion slept
                                were tooiling upward in the night.
                            </p>
                            <img src={profileImg} height={50}/>
                            <p className="sixthMidparags">JHON CINA
                                 <span className="sixthMidspan">Senior UI/Ux Designer</span></p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="seventhMid">
               <div className="container">
                <div className="row">
                    <div className="col-md-3 ms-auto seventhMiddiv text-end">
                        <h1 className="seventhHeading">Who <b>Behind us</b></h1>
                    </div>
                   
                </div>
                <div className="row text-center">
                    <div className="col-md-3 seventhMidimage">
                        <img src={microsoftImg} height={90}/>
                    </div>
                    <div className="col-md-3 seventhMidimage">
                        <img src={appleImg} height={90}/>
                    </div>
                    <div className="col-md-3 seventhMidimage">
                        <img src={hboImg} height={90}/>
                    </div>
                    <div className="col-md-3 seventhMidimage">
                        <img src={hitachiImg} height={90}/>
                    </div>
                </div>
               </div>
            </div>

        </>

    );
}
export default Home;