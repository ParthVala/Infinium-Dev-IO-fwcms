import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 5.png'
import "./Layer1cu.css";
import axios from 'axios'

export default function Layer1cu() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData() {
            axios.get('/contactUslayer1/contactUslayer1getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            
            <div>
                { heading ? <>
                    <h2 className='l1cuh'>{heading.l1cuh}</h2>
                    <p className='l1cup'>{heading.l1cup}</p>
                </> : null}
            </div>

            <div>
                <img className='l1cuf' src={frame} alt="frame" />
            </div>

        </div>
    )
}
