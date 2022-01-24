import React, { useEffect, useState } from 'react'
import MapLocation from '../../../images/Rectangle 19.png'
import './Layer3cu.css'
import axios from 'axios'

export default function Layer3cu() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/contactUslayer3/contactUslayer3getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            {heading ? <>
                <div>
                    <h2 className='l3cuh'>{heading.l3cuh}</h2>
                    <img className='l3cuim' src={MapLocation} alt="MapLocation" />
                </div>

                <div>
                    <p className='p1 p111'>{heading.l3cup1} <br /> {heading.l3cup2} <br /> {heading.l3cup3}</p>
                    <p className='p1 p12'>{heading.l3cupcontact} <br /> {heading.l3cupmail} </p>
                </div>
            </> : null}
        </div>
    )
}
