import React from 'react'
import Navbar from './Navbar/Navbar'
import Layer1 from './Layer1/Layer1'
import Layer2 from './Layer2/Layer2'
import Layer3 from './Layer3/Layer3'
import Layer4 from './Layer4/Layer4'
import Layer5 from './Layer5/Layer5'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Layer1 />
            <Layer2 />
            <Layer3 />
            <Layer4 />
            <Layer5 />
        </div>
    )
}
