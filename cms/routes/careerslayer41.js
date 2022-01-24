var express = require('express');
var router = express.Router();
const careerslayer41Model = require('../models/calay41')
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

//Create

router.post('/careerslayer41add', upload.single('l4caimg'), async (req, res) => {
    var careerslayer41Detail = new careerslayer41Model();

    careerslayer41Detail.l4caimg = req.file.path;
    careerslayer41Detail.l4cah1 = req.body.l4cah1;
    careerslayer41Detail.l4cap1 = req.body.l4cap1;

    console.log(req.file);

    careerslayer41Detail.save(function(err){
        if(err) {
            res.status(500).json("Error")
        } else{
            res.status(200).json("Added")
        }
    })
})

//Read

router.get('/careerslayer41getDetail', async (req, res) => {
    try {
        const careerslayer41detail = await careerslayer41Model.find(req.body);
        res.status(200).json(careerslayer41detail)
    } catch (err) {
        res.status(500).json("There is no hl21 data error")
    }
})

//Update

router.put('careerslayer41updateDetail/:id', async (req, res) => {
    try {
        const careerslayer41updated = await careerslayer41Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router