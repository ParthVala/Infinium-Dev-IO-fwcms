import React, { useEffect, useState } from 'react'
import Laptop from '../../../images/Group 111.png'
import Html from '../../../images/html-1 1.png'
import Rea from '../../../images/react-2 1.png'
import Javascript from '../../../images/javascript-1 1.png'
import Nodejs from '../../../images/nodejs-icon 1.png'
import Mobile from '../../../images/Mobile.png'
import Pc from '../../../images/Pc.png'
import S from '../../../images/Group 112.svg'
import "./Layer2os.css";
import axios from 'axios'

export default function Layer2os() {

    const [headingzero, setHeadingzero] = useState()
    const [headingone, setHeadingone] = useState()
    const [headingtwo, setHeadingtwo] = useState()
    const [headingthree, setHeadingthree] = useState()

    useEffect(() => {
        async function fetchData() {
            axios.get('/ourServicelayer2/ourServicelayer2getDetail').then((res) => {
                console.log(res)
                setHeadingzero(res.data[0])
                setHeadingone(res.data[1])
                setHeadingtwo(res.data[2])
                setHeadingthree(res.data[3])
            })
        }
        fetchData()
    })

    return (
        <div>

            <div className="container l2osall">


                {/* { heading ? <>
                
                    { heading.map((data) => (<>
                    
                        <div className="row justify-content-md-center">
                            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <img className='big-image' width="550" height="auto" src={"http://localhost:5000/" + data.l2osim} alt="Laptop" />
                            </div>
                            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                                <h3 className="p-2">{data.l2osh}</h3>
                                <p className="p-2">{data.l2osp}</p>
                                <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall1} alt="Html" />
                                <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall2} alt="React" />
                                <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall3} alt="Javascript" />
                                <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall4} alt="Nodejs" />
                            </div>
                        </div>

                    </>))}

                </> : null } */}




                <div className="row justify-content-md-center">
                    {headingzero ? <>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img className='big-image' width="550" height="auto" src={"http://localhost:5000/" + headingzero.l2osim} alt="Laptop" />
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                            <h3 className="p-2">{headingzero.l2osh}</h3>
                            <p className="p-2">{headingzero.l2osp}</p>
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingzero.l2osimall1} alt="Html" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingzero.l2osimall2} alt="React" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingzero.l2osimall3} alt="Javascript" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingzero.l2osimall4} alt="Nodejs" />
                        </div>
                    </> : null}
                </div>

                <div className="row justify-content-md-center mt-5">
                    {headingone ? <>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                            <h3 className="p-2">{headingone.l2osh}</h3>
                            <p className="p-2">{headingone.l2osp}</p>
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingone.l2osimall1} alt="Html" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingone.l2osimall2} alt="React" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingone.l2osimall3} alt="Javascript" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingone.l2osimall4} alt="Nodejs" />
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img className='big-image mob' width="550" height="auto" src={"http://localhost:5000/" + headingone.l2osim} alt="Mobile" />
                        </div>
                    </> : null}
                </div>

                <div className="row justify-content-md-center">
                    {headingtwo ? <>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img className='big-image pc' width="550" height="auto" src={"http://localhost:5000/" + headingtwo.l2osim} alt="Pc" />
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                            <h3 className="p-2">{headingtwo.l2osh}</h3>
                            <p className="p-2">{headingtwo.l2osp}</p>
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingtwo.l2osimall1} alt="Html" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingtwo.l2osimall2} alt="React" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingtwo.l2osimall3} alt="Javascript" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingtwo.l2osimall4} alt="Nodejs" />
                        </div>
                    </> : null}
                </div>

                <div className="row justify-content-md-center mt-5">
                    {headingthree ? <>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                            <h3 className="p-2">{headingthree.l2osh}</h3>
                            <p className="p-2">{headingthree.l2osp}</p>
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingthree.l2osimall1} alt="Html" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingthree.l2osimall2} alt="React" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingthree.l2osimall3} alt="Javascript" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + headingthree.l2osimall4} alt="Nodejs" />
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img className='big-image' width="550" height="auto" src={"http://localhost:5000/" + headingthree.l2osim} alt="S" />
                        </div>
                    </> : null}
                </div>

            












            {/* <div className="container l2osall"> */}

            {/* { heading ? <>
                
                { heading.map((data) => (<>
                
                    <div className="row justify-content-md-center">
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <img className='big-image' width="550" height="auto" src={"http://localhost:5000/" + data.l2osim} alt="Laptop" />
                        </div>
                        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                            <h3 className="p-2">{data.l2osh}</h3>
                            <p className="p-2">{data.l2osp}</p>
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall1} alt="Html" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall2} alt="React" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall3} alt="Javascript" />
                            <img className="p-2 img-fluid" src={"http://localhost:5000/" + data.l2osimall4} alt="Nodejs" />
                        </div>
                    </div>

                </>))}

            </> : null } */}

                {/* <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Laptop} alt="Laptop" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Web Development</h3>
                        <p className="p-2">In this day and age, websites are synonymous with business visiting cards. We create websites that convey stories while being the face of your company. We create seamless, interactive websites with the latest technology stack customized specifically to your branding and requirements.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Application Development</h3>
                        <p className="p-2">We create apps across platforms for clientele across a range of industries from financial service management to content streaming platforms. We design apps that are robust and offer extensive utility to client requirements.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Mobile} alt="Mobile" />
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Pc} alt="Pc" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">ERP Development</h3>
                        <p className="p-2">Our company develops cutting-edge ERP software to manage your business effectively while acting as a central brain to your entire workflow and management.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">AR/VR Development</h3>
                        <p className="p-2">Augment your experience and make virtual synonymous to real with our latest services in building Augmented Reality apps for education, training, retail.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={S} alt="S" />
                    </div>
                </div> */}

            {/* </div> */}
            </div>

        </div>
    )
}
