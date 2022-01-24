const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const contactUslayer3Model = require('../models/culay3')

//Create

router.post('/contactUslayer3add', async (req, res) => {
    var contactUslayer3Detail = new contactUslayer3Model()

    contactUslayer3Detail.l3cuh = req.body.l3cuh
    contactUslayer3Detail.l3cup1 = req.body.l3cup1
    contactUslayer3Detail.l3cup2 = req.body.l3cup2
    contactUslayer3Detail.l3cup3 = req.body.l3cup3
    contactUslayer3Detail.l3cupcontact = req.body.l3cupcontact
    contactUslayer3Detail.l3cupmail = req.body.l3cupmail

    contactUslayer3Detail.save(function(err){
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(200).json("contact us layer 3 detail added")
        }
    })
})

//Read

router.get('/contactUslayer3getDetail', async (req, res) => {
    try{
        const contactUslayer3allDetail = await contactUslayer3Model.find(req.body)
        res.status(200).json(contactUslayer3allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/contactUslayer3updateDetail/:id', async (req, res) => {
    try {
        const contactUslayer3updated = await contactUslayer3Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router