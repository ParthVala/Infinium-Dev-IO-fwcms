const mongoose = require('mongoose')

const oslay31Schema = new mongoose.Schema({
    l31osh: {
        type: String
    },
    l31osp: {
        type: String
    },
    l31osim: {
        type: String
    },
    l31osh1: {
        type: String
    },
    l31osp1: {
        type: String
    }
})

module.exports = mongoose.model('oslay3(1)', oslay31Schema)