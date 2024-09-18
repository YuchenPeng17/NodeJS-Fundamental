var express = require("express");
var router = express.Router();
// Import MongoDB Model
const EntryModel = require("../Models/Model");

/* GET account home page. */
router.get("/account", async function (req, res, next) {
  let accounts = await EntryModel.find();
  console.log(accounts);
  // let accounts = db.get("accounts").value();
  res.render("list", {
    accounts: accounts,
  });
});

/* GET create entry page */
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

/* POST create an entry */
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

/* GET delete an entry */
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
