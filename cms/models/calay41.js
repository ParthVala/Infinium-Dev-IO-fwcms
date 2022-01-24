const mongoose = require('mongoose')

const calay41Schema = new mongoose.Schema({
    l4caimg: {
        type: String
    },
    l4cah1: {
        type: String
    },
    l4cap1: {
        type: String
    }
})

module.exports = mongoose.model('calay41', calay41Schema)