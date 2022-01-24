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

const homelayer21Model = require('../models/hlay2(1)');

//Create

router.post('/homelayer21add', upload.single('hl21im'), async (req, res) => {
    var homelayer21Detail = new homelayer21Model();

    homelayer21Detail.hl21im = req.file.path;
    homelayer21Detail.hl21h = req.body.hl21h;
    homelayer21Detail.hl21p = req.body.hl21p;

    console.log(req.file);

    homelayer21Detail.save(function(err){
        if(err) {
            res.status(500).json("Error")
        } else{
            res.status(200).json("Added")
        }
    })
})

//Read

router.get('/homelayer21getDetail', async (req, res) => {
    try {
        const homelayer21detail = await homelayer21Model.find(req.body);
        res.status(200).json(homelayer21detail)
    } catch (err) {
        res.status(500).json("There is no hl21 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer21updated = await homelayer21Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;