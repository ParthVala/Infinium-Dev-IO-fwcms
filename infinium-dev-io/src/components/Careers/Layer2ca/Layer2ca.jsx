import React, { useEffect, useState } from 'react'
import './Layer2ca.css';
import axios from 'axios'

export default function Layer2ca() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/careerslayer2/careerslayer2getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            { heading ? <>
                <div>
                    <h2 className="l2cah">{heading.l2cah}<span className='teo'>{heading.l2cahio}</span> {heading.l2cahllp}</h2>
                </div>
                <div>
                    <p className="l2cap1">{heading.l2cap1}</p>
                    <p className="l2cap2">{heading.l2cap2}</p>
                </div>
            </> : null}
        </div>
    )
}
