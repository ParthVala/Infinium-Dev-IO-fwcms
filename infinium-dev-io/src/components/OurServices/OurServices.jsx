import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Layer5 from '../Home/Layer5/Layer5'
import Layer1os from './Layer1os/Layer1os'
import Layer2os from './Layer2os/Layer2os'
import Layer3os from './Layer3os/Layer3os'

export default function OurServices() {
    return (
        <div>
            <Navbar />
            <Layer1os />
            <Layer2os />
            <Layer3os />
            <Layer5 />
        </div>
    )
}
