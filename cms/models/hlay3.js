const mongoose = require('mongoose');

const hlay3Schema = new mongoose.Schema({
    hl3h: {
        type: String
    },
    hl3p: {
        type: String
    }
});

module.exports = mongoose.model('hlay3', hlay3Schema);