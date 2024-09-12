/**
 * 
 * @param {*} Success Call-back function for successfully connect to DB
 * @param {*} Error Call-back function for failed connect to DB
 */
module.exports = function(Success, Error){
  // Connect To Database
  // 1. Import
  const mongoose = require("mongoose");
  const fs = require("fs");
  const yaml = require("js-yaml");
  const { MongoNetworkError } = require("mongodb");
  const { log } = require("console");

  // 2. Connect to DB
  Secret_Path = __dirname + "/../secret.yaml";
  const yamlContent = fs.readFileSync(Secret_Path, "utf8");
  const connection_string = yaml.load(yamlContent).MongoDB.connection_string;
  mongoose.connect(connection_string, {
    dbName: "Express_Mongoose_01",
  });

  // 3. Set up call-back functions
  // once: only execute the call back function once
  mongoose.connection.once("open", () => {
    Success();
  });

  if(typeof Error !== 'function'){
    Error = () => {
      console.log("Connection Fail")
  }
  }
  mongoose.connection.on("error", () => {
    Error();
  });

  mongoose.connection.on("close", () => {
    console.log("Connection Closed.");
  });
};
