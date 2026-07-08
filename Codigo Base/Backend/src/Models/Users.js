const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    usuario : String,
    password: String
});

module.exports = mongoose.model('Users', UserSchema);
