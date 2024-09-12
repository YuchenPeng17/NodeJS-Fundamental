// Import DB and Model
const DB = require(__dirname + '/Database/Database');
const BookModel = require(__dirname + '/Models/Model');

// Set up Success&Error call-back function in the Database
const sampleBooks = [
    { Name: 'Journey Beyond the Stars', Author: 'Isabella Moon', Price: 17.50, Is_Hot: true },
    { Name: 'The Forgotten Kingdom', Author: 'Henry Long', Price: 12.99, Is_Hot: false },
    { Name: 'The Silent Forest', Author: 'Elena Hawthorne', Price: 15.99, Is_Hot: true },
    { Name: 'Echoes of the Past', Author: 'Samuel Quinn', Price: 12.49, Is_Hot: false },
    { Name: 'Into the Deep Blue', Author: 'Marissa Woods', Price: 18.75, Is_Hot: true },
    { Name: 'Shadows of the Forgotten', Author: 'Gregory Tate', Price: 10.99, Is_Hot: false },
    { Name: 'Winds of Change', Author: 'Amelia Monroe', Price: 14.30, Is_Hot: true },
    { Name: 'The Lost Horizon', Author: 'Oliver Steele', Price: 19.90, Is_Hot: true },
    { Name: 'Tales of the Endless Sea', Author: 'Sophia Rivers', Price: 16.85, Is_Hot: false },
    { Name: 'Whispers in the Dark', Author: 'Nathaniel Cole', Price: 9.99, Is_Hot: true },
    { Name: 'The Hidden Valley', Author: 'Rachel Griffin', Price: 11.50, Is_Hot: false },
    { Name: 'Chronicles of a Dreamer', Author: 'Daniel Walker', Price: 13.75, Is_Hot: true },
];

DB(()=>{
    // 1. Create books
    // insertMany()
    // BookModel.insertMany(sampleBooks, (error, result) => {
    //     if(err){
    //         console.log("InsertMany Failed.")
    //     }
    //     console.log("InsertMany Successed.")
    // });
    BookModel.insertMany(sampleBooks)
    .then(result => {
        console.log("InsertMany Successed.");
        console.log(result);
    })
    .catch(error => {
        console.log("InsertMany Failed.");
        console.log(error);
        return;
    });
});

