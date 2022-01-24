var express = require('express');
var router = express.Router();
const homelayer3Model = require('../models/hlay3');

//Create

router.post('/homelayer3add', async (req, res) => {
    var homelayer3Detail = new homelayer3Model();

    homelayer3Detail.hl3h = req.body.hl3h;
    homelayer3Detail.hl3p = req.body.hl3p;

    homelayer3Detail.save(function (err) {
        if(err){
            res.status(500).json("Error")
        } else {
            res.status(200).json("home layer 3 detail added")
        }
    })
})

//Read

router.get('/homelayer3getDetail', async (req, res) => {
    try {
        const homelayer3detail = await homelayer3Model.find(req.body);
        res.status(200).json(homelayer3detail)
    } catch (err) {
        res.status(500).json("There is no hl3 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer3updated = await homelayer3Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;