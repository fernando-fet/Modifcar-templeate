const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
var cors = require('cors')


const app = express();
app.use(cors())

app.set('port', process.env.PORT || 5000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
        extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/link', require('./routes/links'));
app.use('/Practica', require('./routes/api/expocision'));









//app.use('/Autos', require('./routes/carross'));



//public
app.use(express.static(path.join(__dirname, 'public')));


//inicia el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});