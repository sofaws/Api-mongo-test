const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
 }, { strict: false});

const Model =  mongoose.model('Licence', placeSchema);

module.exports = Model;
