const mongoose = require('mongoose')

const calay1Schema = new mongoose.Schema({
    l1cah1: {
        type: String
    },
    l1cahio: {
        type: String
    },
    l1cahllp: {
        type: String
    },
    l1cah2: {
        type: String
    },
    l1cap: {
        type: String
    },
    l1cab1: {
        type: String
    },
    l1cab2: {
        type: String
    }
})

module.exports = mongoose.model('calay1', calay1Schema)