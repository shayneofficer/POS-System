// import express from 'express';
import express from 'express';
import logger from 'morgan';
import scrapeShine from '../API/shine';
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
APP.use(express.static('public'));

APP.get('/shine', function (req, res) {
  // Sends response before finished scraping, but not a big deal.
  scrapeShine(() => res.send('Scraping Shine Restaurant. Check Console.'));
});

APP.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start our server so that it can begin listening to client requests.
APP.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
