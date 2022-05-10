const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: String,
    description: String,
    money: String,
    moneyreached: String,
   
   
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('event', eventSchema);