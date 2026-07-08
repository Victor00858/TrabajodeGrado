const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./conn');

//Settings
app.set('port', process.env.PORT || 4000);


//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//Routes
app.use('/areas', require('./routes/CTanks.routes'));
app.use('/login', require('./routes/users.routes'));
app.use('/prueba', require('./routes/Perdidas.routes'));

module.exports = app;