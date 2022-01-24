const express = require('express');
const router = express.Router();
const ourServicelayer2Model = require('../models/oslay2');
var multer = require('multer');

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

router.post('/ourServicelayer2add', upload.fields([{ name: 'l2osim'}, { name: 'l2osimall', maxCount: 4}]), async (req, res) => {
    var ourServicelayer2detail = new ourServicelayer2Model();

    console.log('res : ', req.files, req.files.l2osim, req.files.l2osimall.path);


    ourServicelayer2detail.l2osim = req.files.l2osim[0].path;
    ourServicelayer2detail.l2osh = req.body.l2osh;
    ourServicelayer2detail.l2osp = req.body.l2osp;
    ourServicelayer2detail.l2osimall1 = req.files.l2osimall[0].path;
    ourServicelayer2detail.l2osimall2 = req.files.l2osimall[1].path;
    ourServicelayer2detail.l2osimall3 = req.files.l2osimall[2].path;
    ourServicelayer2detail.l2osimall4 = req.files.l2osimall[3].path;


    ourServicelayer2detail.save(function(err) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json("our service layer 2 added");
        }
    })
})

//Read

router.get('/ourServicelayer2getDetail', async (req, res) => {
    try {
        const ourServicelayer2detail = await ourServicelayer2Model.find(req.body);
        res.status(200).json(ourServicelayer2detail)
    } catch (err) {
        res.status(500).json("There is no our service layer 2 data, error")
    }
})

//Update

router.put('/ourServicelayer2updateDetail/:id', async (req, res) => {
    try {
        const ourServicelayer2updated = await ourServicelayer2Model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json("Updated")
    } catch (err) {
        res.status(500).json("Can Update, there is error")
    }
})

module.exports = router;