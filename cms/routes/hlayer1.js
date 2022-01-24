var express = require('express');
var router = express.Router();
const hlay1 = require('../models/hlay1');

//Create

router.post('/add', async (req, res) => {
    
    var hl1detail = new hlay1();
    
    hl1detail.hl1h = req.body.hl1h;
    hl1detail.hl1p = req.body.hl1p;
    hl1detail.hl1f = req.body.hl1f;

    hl1detail.save(function(err){
        if(err){
            res.status(500).json("Error");
        }else{
            res.status(200).json("home l1 detail Added");
        }
    })
})

//Read

router.get('/find', async (req, res) => {
    try {
        const allDetail = await hlay1.find(req.body);
        res.status(200).json(allDetail);
    } catch (err) {
        res.status(500).json("Error");
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const updatedText = await hlay1.findByIdAndUpdate(req.params.id, {
            $set: req.body
    })
    res.status(200).json("Updated");
    } catch (err) {
        res.status(500).json("error");
    }
})

module.exports = router;