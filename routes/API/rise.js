import mapRec from './utils/map';
import csvtojson from 'csvtojson';

const menuFromCSV = (filepath, callback) => {
  /** csv file
  a,b,c
  1,2,3
  4,5,6
  */

  const csvFilePath = './input.csv';
  try {
    csvtojson()
      .fromFile(csvFilePath)
      // .reject((reason) => {
      //   console.log(reason);
      //   callback({error: reason});
      // })
      .then((jsonObj, rejected) => {
        if (rejected) {
          console.log(rejected);
          callback({error: rejected});
        } else {
          console.log(jsonObj);
          callback(jsonArray);
        }
      });
  } catch (e) {
    console.log(e);
    callback({ error: e });
  }
};

export default menuFromCSV;
