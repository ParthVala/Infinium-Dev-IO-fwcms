var express = require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

const homelayer41Model = require('../models/hlay4(1)');

//Create

router.post('/homelayer41add', upload.single('hl41im'), async (req, res) => {
    var homelayer41Detail = new homelayer41Model();

    homelayer41Detail.hl41im = req.file.path;

    console.log(req.file);

    homelayer41Detail.save(function(err){
        if(err) {
            res.status(500).json("Error")
        } else{
            res.status(200).json("Added")
        }
    })
})

//Read

router.get('/homelayer41getDetail', async (req, res) => {
    try {
        const homelayer41detail = await homelayer41Model.find(req.body);
        res.status(200).json(homelayer41detail)
    } catch (err) {
        res.status(500).json("There is no hl41 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer41updated = await homelayer41Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;