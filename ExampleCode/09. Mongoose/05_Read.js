// Import DB and Model
const DB = require(__dirname + '/Database/Database');
const BookModel = require(__dirname + '/Models/Model');

DB(()=>{
    // 1. Read one book
    BookModel.findOne({ Name: 'The Silent Forest' }).select({_id: 0, Name: 1, Author: 1})
    .then(result => {
        console.log("findOne Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("findOne Failed");
        console.log(error);
    })

    // 2. Read many book
    BookModel.find({ Is_Hot: true }).select({_id: 0, Name: 1, Author: 1})
    .then(result => {
        console.log("find Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("find Failed");
        console.log(error);
    })
})