// Import
const mongoose = require("mongoose");

// Define the Schema
const BookSchema = mongoose.Schema({
    Name: {
        type: String,
        unique: true,
    },
    Author: String,
    Price: Number,
    Is_Hot: Boolean,
    Create_Data: {
        type: Date,
        default: new Date(),
    },
});

// Creat the Model for interaction
const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;