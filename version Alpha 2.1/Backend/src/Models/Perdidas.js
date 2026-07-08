const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PerdidaSchema = new Schema({
    idTank: { type: String, require: true },
    fecha: {type: String, require: true},
    horas: {
        hora_1:{
            Ls: { type: Number, require: true},
            Lw: { type: Number, require: true},
            Lt: { type: Number, require: true}
        }
    }
})

module.exports = model('perdidas', PerdidaSchema);