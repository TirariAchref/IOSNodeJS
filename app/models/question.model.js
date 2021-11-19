const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    description: String,
    datecreation:Date
}, {
    timestamps: true
});

module.exports = mongoose.model('question', questionSchema);