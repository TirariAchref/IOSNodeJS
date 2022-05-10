const mongoose = require('mongoose');

const messagerieSchema = mongoose.Schema({
    message: String,
    object: String,
   
    from: String,
    to : String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('messagerie', messagerieSchema);