const fs = require('fs');

// stat
fs.stat('./File/Motto.txt', (err, data)=>{
    if(err){
        console.log("Failed stat");
        return;
    }
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})

// isFile
// isDirectory