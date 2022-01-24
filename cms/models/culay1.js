const mongoose = require('mongoose')

const culay1Schema = new mongoose.Schema({
    l1cuh: {
        type: String
    },
    l1cup: {
        type: String
    }
})

module.exports = mongoose.model('culay1', culay1Schema)