const path = require('path')
const express = require('express');
const hbs = require('hbs')
const app = express();
const bodyparser  = require('body-parser');

require('dotenv').config()





const control = require('./controllers/onecontrol') 

app.use(express.static(__dirname + '/public'))

app.set('view engine','hbs');
app.set('views','views')

app.get('/', control.main)


app.get('/getfgeo',control.fgeoo);
app.get('/getrgeo',control.rgeoo);
app.get('/getweather',control.gweather);

app.use(control.error)


app.listen(process.env.PORT || 5000)

//JS
