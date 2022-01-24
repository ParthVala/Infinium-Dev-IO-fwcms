const mongoose = require('mongoose')

const oslay1Schema = new mongoose.Schema({ 
    l1osh: { 
        type: String
    },
    l1osp: { 
        type: String
    }
})

module.exports = mongoose.model('oslay1', oslay1Schema);