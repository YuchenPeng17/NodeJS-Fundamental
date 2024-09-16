var express = require("express");
var router = express.Router();

// Import lowDB
// {
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");

// const adapter = new FileSync(__dirname + "/../data/db.json");
// const db = low(adapter);
// }
// Import Model
const EntryModel = require("../Models/Model");

// Import shortid
const shortid = require("shortid");

/* GET home page. */
router.get("/account", async function (req, res, next) {
  let accounts = await EntryModel.find();
  console.log(accounts);
  // let accounts = db.get("accounts").value();
  res.render("list", {
    accounts: accounts,
  });
});

// Render create entry page
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// Create an entry
// router.post("/account", function (req, res, next) {
//   let id = shortid.generate();
//   db.get("accounts")
//     .unshift({ id: id, ...req.body })
//     .write();
  // res.render("success", {
  //   msg: "Create Successfully!",
  //   url: "/account",
  // });
// });
router.post("/account", async function (req, res, next) {
  req.body.time = new Date(req.body.time);
  try{
    await EntryModel.create({
      ...req.body,
  });
  }catch(error){
    if(error){
      res.status(500).send("Create Entry Failed");
    };
  };
  res.render("success", {
    msg: "Create Successfully!",
    url: "/account",
  });
});
// Remove one entry
router.get("/account/:id", async function (req, res, next) {
  let id = req.params.id;
  // db.get("accounts").remove({ id: id }).write();
  try{
    await EntryModel.deleteOne({ _id: id });
    console.log("Delete Successfully");
  }catch(error){
    console.log("Delete Failed");
    res.status(500).send("Delete Entry Failed")
  }
  res.render("success", {
    msg: "Removed Successfully!",
    url: "/account",
  });
});

module.exports = router;
