const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/Losses";

mongoose.set('strictQuery', true);

mongoose.connect( URI ,{
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => {
        console.error('Error conectando la base de datos', error);
    })
    ;

module.exports = mongoose;

