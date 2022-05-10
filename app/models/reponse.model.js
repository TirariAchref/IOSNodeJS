const mongoose = require('mongoose');

const reponseSchema = mongoose.Schema({
    description: String,
    idUser:String,
    nameUser:String,
    idQuestion : String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('reponse', reponseSchema);