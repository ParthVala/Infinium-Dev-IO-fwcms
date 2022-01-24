const mongoose = require('mongoose');

const hlay1Schema = new mongoose.Schema({
    hl1h: {
        type: String
    },
    hl1p: {
        type: String
    },
    hl1f: {
        type: String
    }
});

module.exports = mongoose.model('hlay1', hlay1Schema);