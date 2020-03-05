const path = require('path')
const express = require('express');
const hbs = require('hbs')
const port = 9000 || process.env.PORT
const app = express();
const bodyparser  = require('body-parser');





const control = require('./controllers/onecontrol') 

app.use(express.static(__dirname + '/public'))

app.set('view engine','hbs');
app.set('views','views')

app.get('/', control.main)


app.get('/getfgeo',control.fgeoo);
app.get('/getrgeo',control.rgeoo);
app.get('/getweather',control.gweather);

app.use(control.error)


app.listen(port)

//forward geocoding
//   https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoibWFydmVsLWliIiwiYSI6ImNrMTNodGFodDA3N2IzaXJxcmxnNTI5ZTMifQ.UKeLhyp30PL9cwIkDUwDAw&limit=1


//reverse geocoding 
//  https://api.mapbox.com/geocoding/v5/mapbox.places/-122.463,37.7648.json?access_token=pk.eyJ1IjoibWFydmVsLWliIiwiYSI6ImNrMTNodGFodDA3N2IzaXJxcmxnNTI5ZTMifQ.UKeLhyp30PL9cwIkDUwDAw&limit=1