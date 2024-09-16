import React from "react";
import "./AboutUs.css"
import businessImg from "../../images/business.jpg";


function AboutUs() {
    return (
        <>
            <div className="aboutDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 aboutPage">
                            <h1 className="aboutHeader">Welcome to About Page!!</h1>
                        </div>
                    </div>
                    <div class="accordion row" id="accordionServices">
                        <div className="col-md-6">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    INCORPORATION
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    CORPORATE GOVERNANCE   
                                    </button>
                                </h2>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    DRAFTING OF AGREEMENTS
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    CBL/NCLT/NCLAT MATTERS
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    CORPORATE SOCIAL RESPONSIBILITY
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    INTELLECTUAL PROPERTY RIGHTS
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    AUDIT,ADVISORY & DUE DILIGENCE
                                    </button>
                                </h2>
                            </div>
                        </div>  
                        <div className="col-md-6">
                        <div class="accordion-item">
                            <div id="collapseOne" className="accordion-collapse collapse collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                    <img src={businessImg} height={300} width={500}/>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                 </div>
                            </div>
                            </div>

                            <div className="accordion-item">
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                 </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                 </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionServices">
                                <div className="accordion-body">
                                <img src={businessImg} height={300} width={500}/>
                                 </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>


    );

}

export default AboutUs;