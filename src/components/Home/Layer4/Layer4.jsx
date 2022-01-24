import React, { useEffect, useState } from 'react'
// import Airbnb from "../../../images/Airbnb Logo.png";
// import Hubspot from "../../../images/Hubspot Logo.png";
// import Google from "../../../images/Google Logo.png";
// import Microsoft from "../../../images/Microsoft Logo.png";
// import Walmart from "../../../images/Walmart Logo.png";
// import FedEx from "../../../images/FedEx Logo.png";
import "./Layer4.css";
import axios from 'axios';

export default function Layer4() {

    const [heading, setHeading] = useState()

    const [im, setIm] = useState()

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:5000/homelayer4/homelayer4getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
        async function fetchData1() {
            await axios.get('http://localhost:5000/homelayer41/homelayer41getDetail').then((res) => {
                console.log(res);
                setIm(res.data)
            })
        }
        fetchData1()
    }, [])

    return (
        <div className='l4all'>
            <div>
                <hr className="l4b" />
            </div>

            <div className="l4w">
                { heading ? <>
                    <h2 className='l4h'>{heading.hl4h}</h2>
                    <p className='l4p'>{heading.hl4p}</p>
                </> : null}
            </div>

            <div className="container-fluid">
                <div className="l4allimg row">



                {im ? <>
                
                    {im.map((data) => (<>
                    
                        <div className="col-xl-2 col-md-6 col-sm-12">
                            <img className="l4im" src={"http://localhost:5000/" + data.hl41im} alt="Airbnb" />
                        </div>

                    </>))}

                </> : null}



                    {/* <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Airbnb} alt="Airbnb" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Hubspot} alt="Hubspot" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Google} alt="Google" />
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Microsoft} alt="Microsoft" />
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Walmart} alt="Walmart" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={FedEx} alt="FedEx" />
                    </div> */}
                </div>
            </div>

            <div>
                <hr className="l4b2" />
            </div>
        </div>
    )
}
