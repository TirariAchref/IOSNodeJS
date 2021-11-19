const mongoose = require('mongoose');

const messagerieSchema = mongoose.Schema({
    message: String,
    object: String,
    datecreation:Date,
    from: String
}, {
    timestamps: true
});

module.exports = mongoose.model('messagerie', messagerieSchema);