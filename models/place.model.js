const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
 }, { strict: false});

const Model =  mongoose.model('Place2', placeSchema);

module.exports = Model;
