const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const careerslayer5Model = require('../models/calay5')

//Create

router.post('/careerslayer5add', async (req, res) => {

    var careerslayer5Detail = new careerslayer5Model()

    careerslayer5Detail.l5cah = req.body.l5cah
    careerslayer5Detail.l5cahio = req.body.l5cahio
    careerslayer5Detail.l5cahllp = req.body.l5cahllp
    careerslayer5Detail.l5cap = req.body.l5cap
    careerslayer5Detail.l5cab = req.body.l5cab

    careerslayer5Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(200).json("careers layer 5 detail added")
        }
    })

})

//Read

router.get('/careerslayer5getDetail', async (req, res) => {
    try{
        const careerslayer5allDetail = await careerslayer5Model.find(req.body)
        res.status(200).json(careerslayer5allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/careerslayer5updateDetail/:id', async (req, res) => {
    try {
        const careerslayer5updated = await careerslayer5Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router