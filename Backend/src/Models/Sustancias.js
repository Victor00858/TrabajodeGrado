const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SustanciaSchema = new Schema({
    GP: { type: String, require: true},
    ST: { type: String, require: true},
    RVP: { type: Number, require: true },
    Mv: { type: Number, require: true },
    Ml: {type: number},
    S: { type: Number, require: true },
    A: { type: Number, require: true },
    B: { type: Number, require: true }
});

module.exports = model('Sustancias', SustanciaSchema);