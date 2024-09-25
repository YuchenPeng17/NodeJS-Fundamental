var express = require("express");
var router = express.Router();
// Import MongoDB Model
const EntryModel = require("../../models/entry");
// Import Middleware
const CheckLoginMiddleware = require('../../middlewares/checkLogin')

/* Router for homepage */
router.get('/', (req, res)=>{
  res.redirect('/account');
})

/* GET account home page. */
router.get("/account", CheckLoginMiddleware, async function (req, res, next) {
  let accounts = await EntryModel.find();
  // let accounts = db.get("accounts").value();
  res.render("list", {
    accounts: accounts,
  });
});

/* GET create entry page */
router.get("/account/create", CheckLoginMiddleware, function (req, res, next) {
  res.render("create");
});

/* POST create an entry */
router.post("/account", CheckLoginMiddleware, async function (req, res, next) {
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
router.get("/account/:id", CheckLoginMiddleware, async function (req, res, next) {
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
