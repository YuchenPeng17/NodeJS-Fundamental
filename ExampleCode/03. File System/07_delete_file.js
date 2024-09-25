const fs = require('fs');

fs.unlink('./NodeJS-2.md', err => {
    if(err){
        console.log("Failed Unlink");
        return;
    }
    console.log("Successfully Unlink")
})

fs.rm('./NodeJS-3.md', err => {
    if(err){
        console.log("Failed RM");
        return;
    }
    console.log("Successfully RM")
})