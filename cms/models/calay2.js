const mongoose = require('mongoose')

const calay2Schema = new mongoose.Schema({
    l2cah: {
        type: String
    },
    l2cahio: {
        type: String
    },
    l2cahllp: {
        type: String
    },
    l2cap1: {
        type: String
    },
    l2cap2: {
        type: String
    },
})

module.exports = mongoose.model('calay2', calay2Schema)