const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const contactUslayer2Model = require('../models/culay2')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

//Create

router.post('/contactUslayer2add', upload.single('l2cuim'), async (req, res) => {
    var contactUslayer2Detail = new contactUslayer2Model()

    console.log(req.file);

    contactUslayer2Detail.l2cuim = req.file.path
    contactUslayer2Detail.l2cuh = req.body.l2cuh
    contactUslayer2Detail.l2cuh1 = req.body.l2cuh1
    contactUslayer2Detail.l2cuh2 = req.body.l2cuh2
    contactUslayer2Detail.l2cuh3 = req.body.l2cuh3
    contactUslayer2Detail.l2cuh4 = req.body.l2cuh4
    contactUslayer2Detail.l2cub = req.body.l2cub

    contactUslayer2Detail.save(function(err){
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json("contact us layer 2 detail added")
        }
    })
})

//Read

router.get('/contactUslayer2getDetail', async (req, res) => {
    try{
        const contactUslayer2allDetail = await contactUslayer2Model.find(req.body)
        res.status(200).json(contactUslayer2allDetail)
    }catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/contactUslayer2updateDetail/:id', async (req, res) => {
    try {
        const contactUslayer2updated = await contactUslayer2Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router