import React, { useEffect, useState } from 'react'
//import sidepic from '../../../images/Group 124.png'
import './Layer2cu.css'
import axios from 'axios'

export default function Layer2cu() {

    const [heading, setHeading] = useState()

    useEffect(() => {
        async function fetchData(){
            axios.get('/contactUslayer2/contactUslayer2getDetail').then((res) => {
                console.log(res);
                setHeading(res.data[0])
            })
        }
        fetchData()
    })

    return (
        <div>
            
            <div className="container-fluid">

                <div className="row">

                    { heading ? <>

                        <div className="col-xl-6 col-sm-12">
                            <div className="one-img">
                                <img className='l2cupic img-fluid' src={"http://localhost:5000/" + heading.l2cuim} alt="sidepic" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-sm-12">
                            <h2 className='l2cuh p-2'>{heading.l2cuh}</h2>
                            <form className='fo'>
                                <div class="form-group p-2">
                                    <label className='l2cula'>{heading.l2cuh1}</label>
                                    <input type="text" class="form-control inall" placeholder="your name" autoComplete='off' required />
                                </div>
                                <div class="form-group p-2">
                                    <label className='l2cula'>{heading.l2cuh2}</label>
                                    <input type="email" class="form-control inall" placeholder="example@gmail.com" autoComplete='off' required />
                                </div>
                                <div class="form-group p-2">
                                    <label className='l2cula'>{heading.l2cuh3}</label>
                                    <input type="text" class="form-control inall" placeholder="please select" autoComplete='off' required />
                                </div>
                                <div class="form-group p-2">
                                    <label className='l2cula'>{heading.l2cuh4}</label>
                                    <input type="text" class="form-control inall" placeholder="4:00 Available" autoComplete='off' required />
                                </div>
                                <div className="form-group p-2">
                                    <button type="submit" class="btn btn-warning buton">{heading.l2cub}</button>
                                </div>
                            </form>
                        </div>

                    </> : null}

                </div>

            </div>

        </div>
    )
}
