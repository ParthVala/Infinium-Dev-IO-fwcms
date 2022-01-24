const mongoose = require('mongoose');

const hlay31Schema = new mongoose.Schema({
    hl31im: {
        type: String
    },
    hl31h: {
        type: String
    },
    hl31p: {
        type: String
    }
})

module.exports = mongoose.model('hlay3(1)', hlay31Schema);