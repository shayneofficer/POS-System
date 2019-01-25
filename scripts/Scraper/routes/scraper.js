// import express from 'express';
import express from 'express';
import logger from 'morgan';
import scrapeShine from '../API/shine';
import menuFromCSV from '../API/rise';
import mongoose from 'mongoose';

const path = require('path');

const PORT = process.env.PORT || 8080;

const APP = express();

// Configure middleware
// Use morgan logger for logging requests
APP.use(logger('dev'));
// Parse request body as JSON
APP.use(
  express.urlencoded({
    extended: true
  })
);
APP.use(express.json());
// Make public a static folder
APP.use(express.static('../public'));

mongoose.connect(
  'mongodb://heroku_8rhpt7fk:hgvic9grgb6os51g48t19rj7t2@ds157762.mlab.com:57762/heroku_8rhpt7fk',
  { useNewUrlParser: true }
);

APP.get('/shine', function (req, res) {
  // Sends response before finished scraping, but not a big deal.
  scrapeShine(() => res.send('Scraping Shine Restaurant. Check Console.'));
});

APP.get('/', function (req, res) {
  menuFromCSV(null, (result) => res.json(result));
});

APP.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start our server so that it can begin listening to client requests.
APP.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
