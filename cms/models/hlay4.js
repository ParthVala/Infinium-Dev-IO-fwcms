const mongoose = require('mongoose');

const hlay4Schema = new mongoose.Schema({
    hl4h: {
        type: String
    },
    hl4p: {
        type: String
    }
});

module.exports = mongoose.model('hlay4', hlay4Schema);