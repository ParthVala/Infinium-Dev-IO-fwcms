import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 7.png'
import './Layer5ca.css';
import axios from 'axios'

export default function Layer5ca() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData() {
            axios.get('/careerslayer5/careerslayer5getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            <div>
                {heading ? <>
                    <h2 className='l5cah'>{heading.l5cah}<span className='teo'>{heading.l5cahio}</span> {heading.l5cahllp}</h2>
                    <p className='l5cap'>{heading.l5cap}</p>
                    <button className='l5cabt btn btn-warning' type="submit">{heading.l5cab}</button>
                </> : null}
            </div>

            <div>
                <img className='l5caf' src={frame} alt="frame" />
            </div>
        </div>
    )
}
