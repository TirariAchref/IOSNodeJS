const mongoose = require('mongoose');

const messagerieSchema = mongoose.Schema({
    message: String,
    objectt: String,
    name: String,
    from: String,
    to : String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('messagerie', messagerieSchema);