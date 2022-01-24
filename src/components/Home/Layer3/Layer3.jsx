import React, {useEffect, useState} from 'react'
// import pic from "../../../images/Rectangle 244.png";
// import pic1 from "../../../images/Rectangle 244 (1).png";
// import pic2 from "../../../images/Rectangle 244 (2).png";
// import pic3 from "../../../images/Rectangle 244 (3).png";
// import pic4 from "../../../images/Rectangle 244 (4).png";
import frame from "../../../images/Layer 31.png";
import "./Layer3.css";
import axios from 'axios';

export default function Layer3() {

    const [heading, setHeading] = useState()

    const [headingzero, setHeadingzero] = useState()

    useEffect(() => {
        async function fetchData(){
            await axios.get('/homelayer3/homelayer3getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
        async function fetchData1() {
            await axios.get('/homelayer31/homelayer31getDetail').then((res) => {
                console.log('res data1: ',res);
                setHeadingzero(res.data)
            })
        }
        fetchData1()
    }, [])

    return (
        <div className="l3all">
            { heading ? <>
                <div>
                    <h2 className='l3hh'>{heading.hl3h}</h2>
                    <p className='l3pp'>{heading.hl3p}</p>
                </div>
            </> : null} 

            <div className="row w-100">
                <div className="card-group">

                { headingzero ? <>
                
                    {headingzero.map((data) => (<>
                    
                        <div className="col">
                            <div className="card text-left border-0">
                                <img className="l3im" src={"http://localhost:5000/" + data.hl31im} alt="Conceptualization" />
                                <hr className="l3b" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.hl31h}</h5>
                                    <p className="card-text l3tex">
                                        {data.hl31p}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </>))}

                </> : null}



                {/* <div className="col">
                    <div className="card text-left border-0">
                    <img className="l3im" src={pic} alt="Conceptualization" />
                    <hr className="l3b" />
                    <div className="card-body">
                        <h5 className="card-title">Conceptualization</h5>
                        <p className="card-text l3tex">
                        We work with you to conceptualize your ideas and requirements
                        into reality to transform your
                        </p>
                    </div>
                    </div>
                </div> */}

                {/* <div className="col">
                    <div className="card text-left border-0">
                    <img className="l3im" src={pic1} alt="Design" />
                    <hr className="l3b" />
                    <div className="card-body">
                        <h5 className="card-title">Design</h5>
                        <p className="card-text">
                        An elegant interface lies at the core of our development
                        process. Creating a user interface
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-left border-0">
                    <img className="l3im" src={pic2} alt="Development" />
                    <hr className="l3b" />
                    <div className="card-body">
                        <h5 className="card-title">Development</h5>
                        <p className="card-text">
                        We develop your product with the latest technology frameworks
                        that are scalable, responsive, and{" "}
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-left border-0">
                    <img className="l3im" src={pic3} alt="Q/A Testing" />
                    <hr className="l3b" />
                    <div className="card-body">
                        <h5 className="card-title">Q/A Testing</h5>
                        <p className="card-text">
                        Post product development, the developed interface goes through
                        a rigorous Q/A{" "}
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-left border-0">
                    <img className="l3im" src={pic4} alt="Delivery and Servicing" />
                    <div className="card-body">
                        <h5 className="card-title last">Delivery and Servicing</h5>
                        <p className="card-text">
                        We offer timely delivery of your interface/product as well as
                        extensive{" "}
                        </p>
                    </div>
                    </div>
                </div> */}
                
                </div>
            </div>

            <div>
                <img className="l3f" src={frame} alt="f2" />
            </div>
        </div>
    )
}
