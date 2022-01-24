import React from 'react'
import pic from "../../../images/Rectangle1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    return (
        <div>
            
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container mt-4">
                
                <img src={pic} alt="Rectangle" className="navbar-brand" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div>
                        <GiHamburgerMenu />
                    </div>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <div className="navbar-row-wrap">

                        <div className="row navbar-main-row w-100">
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <Link className="nav-link linnk" to="/">
                                    <h6>Home</h6>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-md-3 col-sm-3">
                                <Link className="nav-link linnk" to="/OurServices">
                                    <h6>Our Services</h6>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-md-3 col-sm-3">
                                <Link className="nav-link linnk" to="/Careers">
                                    <h6>Careers</h6>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-4">
                                <button className="button-13">
                                    <Link className="linnk" to="/ContactUs">
                                        <h6>Contact Us</h6>
                                    </Link>
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* <ul className="navbar-nav bg-success w-100">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/OurServices">
                        Our Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Careers">
                        Careers
                        </Link>
                    </li>
                    <li class="nav-item">

                        <button className="button-13">
                            <Link className="linnk" to="/ContactUs">
                                Contact Us
                            </Link>
                        </button>

                    </li>
                    </ul> */}
                </div>

            </div>
        </nav>

        </div>
    )
}
