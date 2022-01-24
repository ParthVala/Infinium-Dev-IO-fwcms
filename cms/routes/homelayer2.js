var express = require('express');
var router = express.Router();
const homelayer2Model = require('../models/hlay2');

//Create

router.post('/homelayer2add', async (req, res) => {
    var homelayer2Detail = new homelayer2Model();

    homelayer2Detail.hl2h = req.body.hl2h;
    homelayer2Detail.hl2p = req.body.hl2p;

    homelayer2Detail.save(function (err) {
        if(err){
            res.status(500).json("Error")
        } else {
            res.status(200).json("home layer 2 detail added")
        }
    })
})

//Read

router.get('/homelayer2getDetail', async (req, res) => {
    try {
        const homelayer2detail = await homelayer2Model.find(req.body);
        res.status(200).json(homelayer2detail)
    } catch (err) {
        res.status(500).json("There is no hl2 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer2updated = await homelayer2Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;