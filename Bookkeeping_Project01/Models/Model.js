// Import
const mongoose = require("mongoose");

// Define the Schema
const EntrySchema = mongoose.Schema({
    // Title
    title: {
        type: String,
        required: true,
    },
    // Date
    time:{
        type: Date,
    },

    // Expense or Income
    type: {
        type: Number,
        default: -1,
    },

    // Amount
    amount: {
        type: Number,
        required: true,
    },

    // Comments
    remarks: {
        type: String,
    }
});

// Creat the Model for interaction
const EntryModel = mongoose.model('Entry', EntrySchema);

module.exports = EntryModel;