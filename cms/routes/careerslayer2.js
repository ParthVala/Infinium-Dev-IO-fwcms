const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const careerslayer2Model = require('../models/calay2')

//Create

router.post('/careerslayer2add', async (req, res) => {

    var careerslayer2Detail = new careerslayer2Model()

    careerslayer2Detail.l2cah = req.body.l2cah
    careerslayer2Detail.l2cahio = req.body.l2cahio
    careerslayer2Detail.l2cahllp = req.body.l2cahllp
    careerslayer2Detail.l2cap1 = req.body.l2cap1
    careerslayer2Detail.l2cap2 = req.body.l2cap2

    careerslayer2Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(200).json("careers layer 2 detail added")
        }
    })

})

//Read

router.get('/careerslayer2getDetail', async (req, res) => {
    try{
        const careerslayer2allDetail = await careerslayer2Model.find(req.body)
        res.status(200).json(careerslayer2allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/careerslayer2updateDetail/:id', async (req, res) => {
    try {
        const careerslayer2updated = await careerslayer2Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router