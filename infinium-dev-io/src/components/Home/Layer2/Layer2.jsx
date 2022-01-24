import React, {useEffect, useState} from 'react'
// import pic from "../../../images/Rectangle 243.png";
// import pic1 from "../../../images/Rectangle 243 (1).png";
// import pic2 from "../../../images/Rectangle 243 (2).png";
// import pic3 from "../../../images/Rectangle 243 (3).png";
// import pic4 from "../../../images/Rectangle 243 (4).png";
// import pic5 from "../../../images/Rectangle 243 (5).png";
import "./Layer2.css";
import axios from 'axios';

export default function Layer2() {

    const [heading, setHeading] = useState()

    const [heading0, setHeading0] = useState()
    
    useEffect(() => {
        async function fetchData(){
            await axios.get('/homelayer2/homelayer2getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
        async function fetchData1() {
            await axios.get('/homelayer21/homelayer21getDetail').then((res) => {
                console.log(' Res is : ',res);
                setHeading0(res.data)
            })
        }
        fetchData1()
    }, [])

    // useEffect(() => {
    //     async function fetchData1() {
    //         await axios.get('/homelayer21/homelayer21getDetail').then((res) => {
    //             console.log(' Res is : ',res);
    //             setHeading0(res.data)
    //         })
    //     }
    //     fetchData1()
    // }, [])

    return (
        <div className="L2all">
            <div className="L2a">
                { heading ? <>
                <h2 className="L2h2">{heading.hl2h}</h2>
                <p className="L2p">
                    {heading.hl2p}
                </p>
                </> : null}
            </div>

            <div className="whole">
                <div className="l2b11 row">
               
                { heading0 ? <>
                    {heading0.map((data) => (<>   
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="l2b1">
                                
                                <img className="l2imge" src={"http://localhost:5000/" + data.hl21im} alt="Finance" />
                            
                                <h5 className="l2hale">{data.hl21h}</h5>
                                <p className="l2pale">
                                    {data.hl21p}
                                </p>
                            
                            </div>
                        </div>
                    </>))}
                </> : null}
               
                {/* <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="l2b1">
                    <img className="l2imge" src={pic1} alt="Manu" />
                    <h5 className="l2hale">Manufacturing</h5>
                    <p className="l2pale">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
                    </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="l2b1">
                    <img className="l2imge" src={pic2} alt="Fashion" />
                    <h5 className="l2hale">Fashion</h5>
                    <p className="l2pale">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
                    </p>
                    </div>
                </div>
                </div>

                <div className="l2b12 row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="l2b1">
                    <img className="l2imge" src={pic3} alt="Logistics" />
                    <h5 className="l2hale">Logistics</h5>
                    <p className="l2pale">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
                    </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="l2b1">
                    <img className="l2imge" src={pic4} alt="Fm" />
                    <h5 className="l2hale">Film Production</h5>
                    <p className="l2pale">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
                    </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="l2b1">
                    <img className="l2imge" src={pic5} alt="Retail" />
                    <h5 className="l2hale">Retail</h5>
                    <p className="l2pale">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
                    </p>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}
