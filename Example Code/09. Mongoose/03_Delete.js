// Import DB and Model
const DB = require(__dirname + '/Database/Database');
const BookModel = require(__dirname + '/Models/Model');

DB(()=>{
    // 1. Delete one book
    BookModel.deleteOne({ Name: 'The Silent Forest' })
    .then(result => {
        console.log("deleteOne Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("deleteOne Failed");
        console.log(error);
    })

    // 2. Delete many books
    BookModel.deleteMany({ Is_Hot: false })
    .then(result => {
        console.log("deleteMany Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("deleteMany Failed");
        console.log(error);
    })

    // 3. Delete all books
    BookModel.deleteMany({})
    .then(result => {
        console.log("deleteMany all Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("deleteMany all Failed");
        console.log(error);
    })
})