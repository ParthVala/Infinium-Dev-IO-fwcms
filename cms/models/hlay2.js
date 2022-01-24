const mongoose = require('mongoose');

const hlay2Schema = new mongoose.Schema({
    hl2h: {
        type: String
    },
    hl2p: {
        type: String
    }
});

module.exports = mongoose.model('hlay2', hlay2Schema);