const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MeteoSchema = new Schema({
    mes: {type: String, require: true},
    In: {type: Number, require: true},
    tmax: { type: Number, require: true },
    tmin: { type: Number, require: true }
})

module.exports = model('meteos', MeteoSchema);