const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CTankSchema = new Schema({
    idTank: {type: String, require: true},
    aislado: { type: Boolean, require: true},
    color: { type: String, require: true },
    estado: { type: String, require: true },
    PC: { type: Boolean, require: true },
    sr: Number,
    D: { type: Number, require: true},
    gnx: Number,
    gnn:Number,
    TC: { type: Boolean, require: true },
    Hs: { type: Number, require: true },
});

module.exports = model( 'CTanks', CTankSchema );
