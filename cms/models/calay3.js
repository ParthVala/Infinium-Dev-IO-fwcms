const mongoose = require('mongoose')

const calay3Schema = new mongoose.Schema({
    l3cah: {
        type: String
    },
    l3cap1: {
        type: String
    },
    l3cap2: {
        type: String
    },
    l3caim: {
        type: String
    }
})

module.exports = new mongoose.model('calay3', calay3Schema)