const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const contactUslayer1Model = require('../models/culay1')

//Create

router.post('/contactUslayer1add', async (req, res) => {

    var contactUslayer1Detail = new contactUslayer1Model()

    contactUslayer1Detail.l1cuh = req.body.l1cuh
    contactUslayer1Detail.l1cup = req.body.l1cup

    contactUslayer1Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(200).json("contact us layer 1 detail added")
        }
    })

})

//Read

router.get('/contactUslayer1getDetail', async (req, res) => {
    try{
        const contactUslayer1allDetail = await contactUslayer1Model.find(req.body)
        res.status(200).json(contactUslayer1allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/contactUslayer1updateDetail/:id', async (req, res) => {
    try {
        const contactUslayer1updated = await contactUslayer1Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router