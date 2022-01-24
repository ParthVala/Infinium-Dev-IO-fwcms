const express = require('express')
const router = express.Router()
const ourServicelayer31Model = require('../models/oslay3(1)')
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

//Create

router.post('/ourServicelayer31add', upload.single('l31osim'), async (req, res) => {
    var ourServicelayer31detail = new ourServicelayer31Model();

    ourServicelayer31detail.l31osh = req.body.l31osh
    ourServicelayer31detail.l31osp = req.body.l31osp
    ourServicelayer31detail.l31osim = req.file.path
    ourServicelayer31detail.l31osh1 = req.body.l31osh1
    ourServicelayer31detail.l31osp1 = req.body.l31osp1

    ourServicelayer31detail.save(function(err) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json("our service layer 31 added");
        }
    })
})

//Read

router.get('/ourServicelayer31getDetail', async (req, res) => {
    try {
        const ourServicelayer31detail = await ourServicelayer31Model.find(req.body);
        res.status(200).json(ourServicelayer31detail)
    } catch (err) {
        res.status(500).json("There is no our service layer 31 data, error")
    }
})

//Update

router.put('/ourServicelayer31updateDetail/:id', async (req, res) => {
    try {
        const ourServicelayer31updated = await ourServicelayer31Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router