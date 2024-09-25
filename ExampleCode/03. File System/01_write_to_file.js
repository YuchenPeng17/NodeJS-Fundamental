const fs = require('fs');

// 1) Async
fs.writeFile('./motto.txt', "If you're not positive energy, you're negative energy.", err => {
    if(err){
        console.log("Write Failed");
        return;
    }
    console.log("Write Successfully");
})

// 2) Sync
fs.writeFileSync('./data.txt', "Synx Write File Test");


/*
1. If file does not exist, fs will automatically create the file.
2. Async is more efficient.
3. writeFile(path, content, callBack)
*/