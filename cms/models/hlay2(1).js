const mongoose = require('mongoose');

const hlay21Schema = new mongoose.Schema({
    hl21im: {
        type: String
    },
    hl21h: {
        type: String
    },
    hl21p: {
        type: String
    }
})

module.exports = mongoose.model('hlay2(1)', hlay21Schema);