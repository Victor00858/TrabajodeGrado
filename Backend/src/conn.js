const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/Losses";

mongoose.set('strictQuery', true);

mongoose.connect( URI ,{
    useNewUrlParser: true, useUnifiedTopology: true,
})
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));


module.exports = mongoose;

