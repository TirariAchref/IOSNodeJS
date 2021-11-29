const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email:String,
    password:String,
    phone:String,
    categorieclient:String,
    imageUrl:String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);