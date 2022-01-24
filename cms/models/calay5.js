const mongoose = require('mongoose')

const calay5Schema = new mongoose.Schema({
    l5cah: {
        type: String
    },
    l5cahio: {
        type: String
    },
    l5cahllp: {
        type: String
    },
    l5cap: {
        type: String
    },
    l5cab: {
        type: String
    }
})

module.exports = mongoose.model('calay5', calay5Schema)