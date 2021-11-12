// this file was created to import data from csv file to database
const csvtojson = require("csvtojson");
const fs = require("fs");

csvtojson()
  .fromFile("src/public/emails.csv")
  .then((csvData) => {
    const jsonString = JSON.stringify(csvData);
    fs.writeFile("src/public/emails.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  });
