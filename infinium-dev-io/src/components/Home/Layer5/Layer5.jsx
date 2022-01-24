import React from 'react'
import picW from '../../../images/Rectangle 112.png';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import telegram from '../../../images/telegram.png';
import instagram from '../../../images/instagram.png';
import "./Layer5.css";

export default function Layer5() {
    return (
        <div className="l5all bd-secondary">
            <div className="row footer-main-row">

                <div className="col-xl-3 col-sm-12">
                    <img className="img-fluid main-logo-footer" src={picW} alt="Infinium DevIO" />
                </div>

                <div className="col-xl-9 col-sm-12 m-0">
                    <div className="row footer-row-1 m-0 p-0">
                        <div className="col-xl-9 col-sm-12 m-0 p-0">

                            <div className="footer-child-row">
                                <div className="footer-link-col">
                                <a className='rmancdec' href="/">Home</a>
                                </div>
                                <div className="footer-link-col">
                                <a className='rmancdec' href="/">About Us</a>
                                </div>
                                <div className="footer-link-col">
                                <a className='rmancdec' href="/">Our Service</a>
                                </div>
                                <div className="footer-link-col footer-career-div">
                                <a className='rmancdec' href="/">Careers</a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-xl-3 col-sm-12 footer-social-icon">
                            <a className='flogo' href="/"><img src={facebook} alt="facebook" /></a>
                            <a className='flogo' href="/"><img src={twitter} alt="twitter" /></a>
                            <a className='flogo' href="/"><img src={telegram} alt="telegram" /></a>
                            <a className='flogo' href="/"><img src={instagram} alt="instagram" /></a>
                        </div>

                    </div>

                    <div className="footer-line-class">
                        
                    </div>

                    <div className="row m-0 p-0">
                        <div className="col-xl-9 col-sm-12 m-0 p-0">

                            <div className="footer-child-row">
                                <a className='rmancdec footer-link-col' href="/">Privacy Policy</a>
                                <a className='rmancdec footer-link-col' href="/">Term of Use</a>
                                <a className='rmancdec footer-link-col' href="/">Legal</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
