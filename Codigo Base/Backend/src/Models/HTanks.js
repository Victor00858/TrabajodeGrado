const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const HtankSchema = new Schema({
    idTank: { type: String, require: true },
    fecha: { type: String, require: true },
    horas: {
        hn: { type: Boolean, require: true },
        ge: { type: Boolean, require: true },
        ht: { type: Boolean, require: true },
        hora_1: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_2: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_3: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_4: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_5: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_6: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_7: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_8: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_9: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_10: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_11: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_12: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_13: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_14: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_15: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_16: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_17: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_18: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_19: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_20: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_21: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_22: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_23: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        },
        hora_24: {
            Hlxp: Number,
            Hlnp: Number,
            tbx: Number,
            tbn: Number,
            Q: { type: Number, require: true },
            Pbx: Number,
            Pbn: Number
        }
    }
});

module.exports = model('htank', HtankSchema);