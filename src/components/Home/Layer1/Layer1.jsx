import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 21.png'
import "./Layer1.css"
import axios from 'axios'

export default function Layer1() {

    const [heading, setHeading] = useState()


    useEffect(() => {
        async function fetchData(){
            await axios.get('/hlayer1/find').then((res) => {
                console.log(res);
                setHeading(res.data[0]);
            })
        }
        fetchData()
    }, [])

    // useEffect(async() => {
    //     await axios.get('/hlayer1/find').then((res) => {
    //         console.log(res);
    //         setHeading(res.data[0]);
    //     })
    // }, [])

    

    return (
        <div>
            { heading ? (<>
            <div className="col-xl-12 col-md-12 col-sm-12">
                <div>
                    <h1 className='l1h'>{heading.hl1h}</h1>
                    <p className='l1p'>{heading.hl1p}</p>
                </div>
            </div>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                <img className="l1f" src={frame} alt="f1" />
            </div>
            </>) : null }
        </div>
    )
}
