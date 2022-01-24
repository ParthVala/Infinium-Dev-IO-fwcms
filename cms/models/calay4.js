const mongoose = require('mongoose');

const calay4Schema = new mongoose.Schema({
    l4cah: {
        type: String
    }
})

module.exports = mongoose.model('calay4', calay4Schema);