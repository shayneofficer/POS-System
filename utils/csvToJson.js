import csvtojson from 'csvtojson';
import path from 'path';

const csvToJson = (filepath, callback) => {
  // Current path is routes/API/input.csv
  const csvFilePath = filepath || path.join(__dirname, './input.csv');
  csvtojson()
    .fromFile(csvFilePath)
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

export default csvToJson;
