// Import DB and Model
const DB = require(__dirname + '/Database/Database');
const BookModel = require(__dirname + '/Models/Model');

DB(()=>{
    // 1. Update one book
    BookModel.updateOne({ Name: 'The Silent Forest' }, { Price: 19.99 })
    .then(result => {
        console.log("updateOne Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("updateOne Failed");
        console.log(error);
    })

    // 2. Update many book
    BookModel.updateMany({ Is_Hot: true }, { $inc : {Price: 10 } })
    .then(result => {
        console.log("updateMany Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("updateMany Failed");
        console.log(error);
    })
})