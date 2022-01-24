const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const careerslayer3Model = require('../models/calay3')

var multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

//Create

router.post('/careerslayer3add', upload.single('l3caim'), async (req, res) => {
    var careerslayer3Detail = new careerslayer3Model()

    careerslayer3Detail.l3cah = req.body.l3cah
    careerslayer3Detail.l3cap1 = req.body.l3cap1
    careerslayer3Detail.l3cap2 = req.body.l3cap2
    careerslayer3Detail.l3caim = req.file.path

    careerslayer3Detail.save(function(err){
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json("careers layer 3 added")
        }
    })
})

//Read

router.get('/careerslayer3getDetail', async (req, res) => {
    try{
        const careerslayer3allDetail = await careerslayer3Model.find(req.body)
        res.status(200).json(careerslayer3allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/careerslayer3updateDetail/:id', async (req, res) => {
    try {
        const careerslayer3updated = await careerslayer3Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router