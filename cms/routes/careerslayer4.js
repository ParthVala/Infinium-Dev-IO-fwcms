const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const careerslayer4Model = require('../models/calay4')

//Create

router.post('/careerslayer4add', async (req, res) => {

    var careerslayer4Detail = new careerslayer4Model()

    careerslayer4Detail.l4cah = req.body.l4cah

    careerslayer4Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(200).json("careers layer 4 detail added")
        }
    })

})

//Read

router.get('/careerslayer4getDetail', async (req, res) => {
    try{
        const careerslayer4allDetail = await careerslayer4Model.find(req.body)
        res.status(200).json(careerslayer4allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/careerslayer4updateDetail/:id', async (req, res) => {
    try {
        const careerslayer4updated = await careerslayer4Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router