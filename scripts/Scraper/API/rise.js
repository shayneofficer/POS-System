import mapRec from './utils/map';
import csvtojson from 'csvtojson';
import path from 'path';

const menuFromCSV = (filepath, callback) => {
  /** csv file
  a,b,c
  1,2,3
  4,5,6
  */

  const csvFilePath = path.join(__dirname, './input.csv');
  csvtojson()
    .fromFile(csvFilePath)
    // .reject((reason) => {
    //   console.log(reason);
    //   callback({error: reason});
    // })
    .then((jsonObj, rejected) => {
      if (rejected) {
        console.log(rejected);
        callback({ error: rejected });
      } else {
        console.log(jsonObj);
        callback(jsonObj);
      }
    });
};

export default menuFromCSV;
