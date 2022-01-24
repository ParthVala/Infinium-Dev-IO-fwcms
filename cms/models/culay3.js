const mongoose = require('mongoose')

const culay3Schema = new mongoose.Schema({
    l3cuh: {
        type: String
    },
    l3cup1: {
        type: String
    },
    l3cup2: {
        type: String
    },
    l3cup3: {
        type: String
    },
    l3cupcontact: {
        type: String
    },
    l3cupmail: {
        type: String
    }
})

module.exports = mongoose.model('culay3', culay3Schema)