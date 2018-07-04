const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({}, { strict: false });

const Model = mongoose.model("Place2", placeSchema);

module.exports = Model;
