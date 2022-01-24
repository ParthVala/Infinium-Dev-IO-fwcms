const mongoose = require('mongoose')

const culay2Schema = mongoose.Schema({
    l2cuim: {
        type: String
    },
    l2cuh: {
        type: String
    },
    l2cuh1: {
        type: String
    },
    l2cuh2: {
        type: String
    },
    l2cuh3: {
        type: String
    },
    l2cuh4: {
        type: String
    },
    l2cub: {
        type: String
    }
})

module.exports = mongoose.model('culay2', culay2Schema)