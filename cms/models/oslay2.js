const mongoose = require('mongoose')

const oslay2Schema = new mongoose.Schema({
    l2osim: {
        type: String
    },
    l2osh: {
        type: String
    },
    l2osp: {
        type: String
    },
    l2osimall1: {
        type: String
    },
    l2osimall2: {
        type: String
    },
    l2osimall3: {
        type: String
    },
    l2osimall4: {
        type: String
    }
})

module.exports = mongoose.model('oslay2', oslay2Schema)