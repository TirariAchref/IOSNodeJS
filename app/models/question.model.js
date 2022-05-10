const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    subject : String,
    description: String,
    idClient:String,
    nbrrate : String,
    nbruser : String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('question', questionSchema);