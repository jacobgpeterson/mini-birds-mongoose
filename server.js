var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var SightingCtrl = require('./controllers/SightingCtrl');

var app = express();
var port = 8770;
var mongoUri='mongodb://localhost:27017/mini-birds-mongoose';

app.use(bodyParser.json());
app.use(cors());

app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('connected to mongoDB at: ', mongoUri);
})

app.listen(port);