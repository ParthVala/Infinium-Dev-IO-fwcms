import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 4.png'
import './Layer3os.css'
import axios from 'axios'
import HomeCarousel from './HomeCarousel'
//import people from '../../../images/Picture.png'

export default function Layer3os() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/ourServicelayer3/ourServicelayer3getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            <div className="l3osall">

                <div>
                    { heading ? <>
                        <h2 className="l3osh">{heading.l3osh}</h2>
                        <p className="l3osp">{heading.l3osp}</p>
                    </> : null }
                </div>
                

                <div>
                    <HomeCarousel />
                    {/* <SampleCaro /> */}
                </div>
                

                <div>
                    <img className='l3osf' src={frame} alt="frame" />
                </div>

            </div>
        </div>
    )
}
