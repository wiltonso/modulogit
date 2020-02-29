const express = require('express');
const mongoose = require('mongoose');
const mustache = require('mustache-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const router = require('./routes/index');
const helpers = require('./helpers');
const errorhandler = require('./handlers/errorhandlers');

// Configuraçoes
const app = express();

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.teste ='123';
    next();
});

app.use(express.json());
app.use(express.urlencoded( {urlencoded:true} ));

app.use(cookieParser(process.env.SECRET)); 
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(flash());

app.use((req, res, next) =>{
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    next();
});

app.use('/', router); 

app.use(errorhandler.notfound);

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;