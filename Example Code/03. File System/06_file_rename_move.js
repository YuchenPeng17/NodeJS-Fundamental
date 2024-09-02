// 1. Import fs
const fs = require('fs');

// 2. file rename
fs.rename('./motto.txt', './Motto.txt', err => {
    if(err){
        console.log("Failed Rename");
        return;
    }
    console.log("Successfully Rename")
})

// 3. file move
fs.rename('./Motto.txt', './File/Motto.txt', err => {
    if(err){
        console.log("Failed Move");
        return;
    }
    console.log("Successfully Move")
})