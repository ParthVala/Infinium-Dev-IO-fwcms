import React, { useEffect, useState }from 'react'
import grppic from '../../../images/Group 73.svg'
import './Layer3ca.css'
import axios from 'axios'

export default function Layer3ca() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/careerslayer3/careerslayer3getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div className='l3caall'>
            { heading ? <>
                <div>
                    <h2 className='l3cah'>{heading.l3cah}</h2>
                    <p className='l2cap1'>{heading.l3cap1}</p>
                    <p className='l2cap2'>{heading.l3cap2}</p>
                </div>

                <div>
                    <img className='l3ca-main-img img-fluid' src={"http://localhost:5000/" + heading.l3caim} alt="grppic" />
                </div>
            </> : null}
        </div>
    )
}
