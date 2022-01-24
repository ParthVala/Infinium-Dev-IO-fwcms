import React, { useEffect, useState } from 'react'
// import per from '../../../images/Rectangle 117.png'
// import per1 from '../../../images/Rectangle 117 (1).png'
// import per2 from '../../../images/Rectangle 117 (2).png'
// import per3 from '../../../images/Rectangle 117 (3).png'
// import per4 from '../../../images/Rectangle 117 (4).png'
// import per5 from '../../../images/Rectangle 117 (5).png'
import './Layer4ca.css';
import axios from 'axios'

export default function Layer4ca() {

    const [heading, setHeading] = useState()

    const [headingone, setHeadingone] = useState()

    useEffect(() => {
        async function fetchData() {
            axios.get('/careerslayer4/careerslayer4getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
        async function fetchData1() {
            axios.get('/careerslayer41/careerslayer41getDetail').then((res) => {
                console.log(res);
                setHeadingone(res.data)
            })
        }
        fetchData1()
    })

    return (
        <div>
            
            <div>
                {heading ? <>
                    <h2 className="l4cahh">{heading.l4cah}</h2>
                </> : null}
            </div>

            <div className="row w-100 row-cols-1 row-cols-md-3 g-4 justify-content-md-center l4ca1">


                {headingone ? <>

                    {headingone.map((data) => (<>
                        
                        <div className="col l4cawho">
                            <div className="card h-100 border-0">
                            <img src={"http://localhost:5000/" + data.l4caimg} className="l4caimall" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title l4cah">{data.l4cah1}</h5>
                                <p className="card-text l4cap">{data.l4cap1}</p>
                            </div>
                            </div>
                        </div>

                    </>))}
                
                </> : null}

                



                {/* <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Competitive pay</h5>
                        <p className="card-text l4cap">Looking for a great salary and solid stock options? You’ve come to the right place</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per1} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible schedule</h5>
                        <p className="card-text l4cap">Do the work you need to get done in the time you have to get it done</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per2} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Amazing benefits</h5>
                        <p className="card-text l4cap">Medical, dental, vision, 401k, FSA, commuter… we’ve got you covered</p>
                    </div>
                    </div>
                </div> */}
            </div>

            {/* <br />
            <br /> */}

            {/* <div className="row w-100 row-cols-1 row-cols-md-3 g-4 justify-content-md-center l4ca2">
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per3} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible vacation</h5>
                        <p className="card-text l4cap">We work to live, not live to work. So go on, book that dream vacation</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per4} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Health & wellness</h5>
                        <p className="card-text l4cap">A healthy body supports a healthy mind, so we partner with Crunch Fitness and CorePower</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per5} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Family-friendly</h5>
                        <p className="card-text l4cap">From flexible scheduling to parental leave to kids’ birthdays off, we support Sigma families</p>
                    </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
