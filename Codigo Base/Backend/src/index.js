
const app = require('./app');

//Starting the server
app.listen(app.get('port'), () => {
    console.log('servidor a su servicio en el puerto', app.get('port'))
});
