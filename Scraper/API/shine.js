import mapRec from './utils/map';
import cheerio from 'cheerio';
import axios from 'axios';
import shineUrls from './utils/shineUrls';

const scrapeShine = (callback) => {
  const scrapeMenu = ({category, url}) => {
    axios.get(url).then(function (response) {
      const $ = cheerio.load(response.data);
      let menuList = $('#menu');
      let itemArray = $(menuList).find('#menuli');

      console.log(category);
      console.log('---------------------------------------------------------');
      // Recursive map method. See the file 'mapRec()' is imported from.
      mapRec(itemArray, (i) => {
        let name = $(i).find('#menuname').text();

          name ? console.log(name) :
          console.log('ERROR: name undefined at index: ' + i);
      });
    });
  };

  // Call scrapeMenu on each menu in the relavant array of objects
  mapRec(shineUrls, (i) => (scrapeMenu(i)));
  
  callback();  
};

export default scrapeShine;
