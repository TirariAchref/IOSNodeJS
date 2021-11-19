const mongoose = require('mongoose');

const reponseSchema = mongoose.Schema({
    description: String,
    datecreation:Date
}, {
    timestamps: true
});

module.exports = mongoose.model('reponse', reponseSchema);