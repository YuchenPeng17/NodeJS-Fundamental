// Import DB and Model
const DB = require(__dirname + '/Database/Database');
const BookModel = require(__dirname + '/Models/Model');

DB(()=>{
    // 1. Read books that are less than 20 dollars
    // BookModel.find({ Price: {$lt: 20} }).select({_id: 0, Name: 1, Price: 1})
    // .then(result => {
    //     console.log("find Successed. Belows are book less than 20 dollars");
    //     console.log(result);
    // })
    // .catch(error => {
    //     console.log("find Failed");
    //     console.log(error);
    // });

    // 2. Read books that are hot and price is either >25 or < 20
    BookModel.find({ $and: [ {Is_Hot: true}, {$or:[{Price: {$lt: 20}}, {Price: {$gt: 25}}]}]}).select({_id: 0, Name: 1, Price: 1, Is_Hot: true})
    .then(result => {
        console.log("find Successed. Belows are book are hot and price is either >25 or < 20");
        console.log(result);
    })
    .catch(error => {
        console.log("find Failed");
        console.log(error);
    });
})