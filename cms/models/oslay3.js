const mongoose = require('mongoose')

const oslay3Schema = new mongoose.Schema({ 
    l3osh: { 
        type: String
    },
    l3osp: { 
        type: String
    }
})

module.exports = mongoose.model('oslay3', oslay3Schema);