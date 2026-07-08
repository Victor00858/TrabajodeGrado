const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SustanciaSchema = new Schema({
    GP: { type: String, require: true},
    ST: { type: String, require: true},
    Mv: { type: Number, require: true },
    Ml: {type: Number},
    A: { type: Number, require: true },
    B: { type: Number, require: true },
    Kc: { type: Number, require: true }
});

module.exports = model('Sustancias', SustanciaSchema);