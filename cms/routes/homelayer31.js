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

const homelayer31Model = require('../models/hlay3(1)');

//Create

router.post('/homelayer31add', upload.single('hl31im'), async (req, res) => {
    var homelayer31Detail = new homelayer31Model();

    homelayer31Detail.hl31im = req.file.path;
    homelayer31Detail.hl31h = req.body.hl31h;
    homelayer31Detail.hl31p = req.body.hl31p;

    console.log(req.file);

    homelayer31Detail.save(function(err){
        if(err) {
            res.status(500).json("Error")
        } else{
            res.status(200).json("Added")
        }
    })
})

//Read

router.get('/homelayer31getDetail', async (req, res) => {
    try {
        const homelayer31detail = await homelayer31Model.find(req.body);
        res.status(200).json(homelayer31detail)
    } catch (err) {
        res.status(500).json("There is no hl31 data error")
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const homelayer31updated = await homelayer31Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;