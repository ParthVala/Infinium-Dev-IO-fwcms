var express = require('express');
var router = express.Router();
const homelayer4Model = require('../models/hlay4');

//Create

router.post('/homelayer4add', async (req, res) => {
    var homelayer4Detail = new homelayer4Model();

    homelayer4Detail.hl4h = req.body.hl4h;
    homelayer4Detail.hl4p = req.body.hl4p;

    homelayer4Detail.save(function (err) {
        if(err){
            res.status(500).json("Error")
        } else {
            res.status(200).json("home layer 4 detail added")
        }
    })
})

//Read

router.get('/homelayer4getDetail', async (req, res) => {
    try {
        const homelayer4detail = await homelayer4Model.find(req.body);
        res.status(200).json(homelayer4detail)
    } catch (err) {
        res.status(500).json("There is no hl4 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer4updated = await homelayer4Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;