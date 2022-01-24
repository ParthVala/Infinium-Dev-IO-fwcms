var express = require('express');
var router = express.Router();
var oslay3Model = require('../models/oslay3');

//Create

router.post('/ourServicelayer3add', async (req, res) => {
    var oslayer3detail = new oslay3Model();

    oslayer3detail.l3osh = req.body.l3osh;
    oslayer3detail.l3osp = req.body.l3osp;

    oslayer3detail.save(function(err) {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(200).json("our service layer 3 detail added")
        }
    })
})

//Read

router.get('/ourServicelayer3getDetail', async (req, res) => {
    try {
        const oslayer3detail = await oslay3Model.find(req.body)
        res.status(200).json(oslayer3detail)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/ourServicelayer3updateDetail/:id', async (req, res) => {
    try {
        const updatedDetail = await oslay3Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated oslayer3");
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;