// 1. install: npm i mongoose
// 2. import: 
const mongoose = require('mongoose');
const fs = require('fs')
const yaml = require('js-yaml');
const { MongoNetworkError } = require('mongodb');
const { log } = require('console');

// 3. connect db
const yamlContent = fs.readFileSync('secret.yaml', 'utf8');
const connection_string = yaml.load(yamlContent).MongoDB.connection_string;
mongoose.connect(connection_string, {
    dbName : "Express_Mongoose_01"
})

// 4. set up connection call-back
// once: only execute the call back function once
mongoose.connection.once('open', async ()=>{
    console.log("Successfully Connected.");
    
    // 5. create schema
    // set attribute and type
    const BookSchema = mongoose.Schema({
        Name: {
            type: String,
            required: true,
        },
        Author: String,
        Price: Number,
        Is_Hot: Boolean,
        Create_Data: {
            type: Date,
            default: new Date(),
        },
    });
    // 6. create model based on schema
    const BookModel = mongoose.model('Book', BookSchema);

    // 7. Create new document
    // Method1: Bilibili Teacher        no longer accepts a callback
    // BookModel.create({
    //     Name: "Apple Journey",
    //     Author: "Steve Jobs",
    //     Price: 49.99,
    // }, (err, data) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    // })

    // Method2: Model API
    await BookModel.create({
        Name: "Apple Journey",
        Author: "Steve Jobs",
        Price: 49.99,
    });

    // 8. Close DB Connection
    mongoose.disconnect();
    console.log("Finish Exeution");
})


