import React, { useEffect, useState } from 'react'
import frame from '../../../images/Layer 6.png'
import './Layer1ca.css';
import axios from 'axios'

export default function Layer1ca() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/careerslayer1/careerslayer1getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div className='ml-auto mr-auto'>
            <div>
                { heading ? <>
                    <h2 className='l1cah2'>{heading.l1cah1}<span className='teo'>{heading.l1cahio}</span> {heading.l1cahllp}</h2>
                    <h5 className='l1cah5'>{heading.l1cah2}</h5>
                    <p className='l1cap'>{heading.l1cap}</p>
                    <button type="submit" className='btn btn-outline-warning btns'>{heading.l1cab1}</button>
                    <br />
                    <button type="submit" className='btn btn-outline-secondary btns1'>{heading.l1cab2}</button>
                </> : null}
            </div>

            <div>
                <img className='l1caf' src={frame} alt="frame" />
            </div>
        </div>
    )
}
