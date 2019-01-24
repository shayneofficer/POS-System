import mapRec from './utils/map';
import cheerio from 'cheerio';
import axios from 'axios';
import shineUrls from './utils/shineUrls';
const db = require('../model/Schemas/Menus/menuItem');

const scrapeShine = (callback) => {
  const scrapeMenu = ({ category, url }) => {
    axios.get(url).then(function (response) {
      const $ = cheerio.load(response.data);
      let menuList = $('#menu');
      let itemArray = $(menuList).find('#menuli');

      console.log(category);
      console.log('---------------------------------------------------------');
      // Recursive map method. See the file 'mapRec()' is imported from.
      mapRec(itemArray, (i) => {
        let name = $(i).find('#menuname').text();
        let price = $(i).find('#menuprice').text();
        db.create({
          name: name,
          price: price,
          category: category,
          date: new Date(Date.now())
        }).then((result) => {
          console.log(`${name}: $${price}`);
        }).catch((err) => {
          console.error(err);
        });
      });
    });
  };

  // Call scrapeMenu on each menu in the relavant array of objects
  mapRec(shineUrls, (i) => scrapeMenu(i));

  callback();
};

export default scrapeShine;
