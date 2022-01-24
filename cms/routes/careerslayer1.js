const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const careerslayer1Model = require('../models/calay1')

//Create

router.post('/careerslayer1add', async (req, res) => {

    var careerslayer1Detail = new careerslayer1Model()

    careerslayer1Detail.l1cah1 = req.body.l1cah1
    careerslayer1Detail.l1cahio = req.body.l1cahio
    careerslayer1Detail.l1cahllp = req.body.l1cahllp
    careerslayer1Detail.l1cah2 = req.body.l1cah2
    careerslayer1Detail.l1cap = req.body.l1cap
    careerslayer1Detail.l1cab1 = req.body.l1cab1
    careerslayer1Detail.l1cab2 = req.body.l1cab2

    careerslayer1Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(200).json("careers layer 1 detail added")
        }
    })

})

//Read

router.get('/careerslayer1getDetail', async (req, res) => {
    try{
        const careerslayer1allDetail = await careerslayer1Model.find(req.body)
        res.status(200).json(careerslayer1allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/careerslayer1updateDetail/:id', async (req, res) => {
    try {
        const careerslayer1updated = await careerslayer1Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router