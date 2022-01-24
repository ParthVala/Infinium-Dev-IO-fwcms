var express = require('express');
var router = express.Router();
var oslay1Model = require('../models/oslay1');

//Create

router.post('/ourServicelayer1add', async (req, res) => {
    var oslayer1detail = new oslay1Model();

    oslayer1detail.l1osh = req.body.l1osh;
    oslayer1detail.l1osp = req.body.l1osp;

    oslayer1detail.save(function(err) {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(200).json("our service layer 1 detail added")
        }
    })
})

//Read

router.get('/ourServicelayer1getDetail', async (req, res) => {
    try {
        const oslayer1detail = await oslay1Model.find(req.body)
        res.status(200).json(oslayer1detail)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update

router.put('/ourServicelayer1updateDetail/:id', async (req, res) => {
    try {
        const updatedDetail = await oslay1Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated oslayer1");
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;