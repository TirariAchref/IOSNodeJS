const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: String,
    description: String,
    money: String,
    moneyreached: String,
   
   
}, {
    timestamps: true
});

module.exports = mongoose.model('event', eventSchema);