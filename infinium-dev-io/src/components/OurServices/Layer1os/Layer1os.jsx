import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 2.png'
import './Layer1os.css';
import axios from 'axios'

export default function Layer1os() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            await axios.get('/ourServicelayer1/ourServicelayer1getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0]);
            })
        }
        fetchData()
    })

    return (
        <div className='l1osall'>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                { heading ? <>
                    <h2 className='l1osh'>{heading.l1osh}</h2>
                    <p className='l1ost'>{heading.l1osp}</p>
                </> : null}
            </div>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                <img className='l1osf' src={frame} alt="frame" />
            </div>

        </div>
    )
}
