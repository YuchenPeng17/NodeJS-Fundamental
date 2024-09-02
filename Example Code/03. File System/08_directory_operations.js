const fs = require('fs');

// 1. Create 1 folder
fs.mkdir('./HTML',  err => {
    if(err){
        console.log("Failed MKDIR");
        return;
    }
    console.log("Successfully MKDIR")
})

// 2. Recursively creat multple layer directory
fs.mkdir('./a/b/c', {recursive: true}, err => {
    if(err){
        console.log("Failed recursive MKDIR");
        return;
    }
    console.log("Successfully recursive MKDIR")
})

// 3. Read Directory
fs.readdir('./File', (err, data) => {
    if(err){
        console.log("Failed readdir");
        return;
    }
    console.log(data)
})

// 4. Delete Single Directory 
fs.rmdir('./HTML', err => {
    if(err){
        console.log("Failed rmdir");
        return;
    }
    console.log("Successfully rmdir")
})

// 5. Delete Recursive Directory 配置对象 {}
// fs.rmdir('./a', {recursive: true}, err => {
//     if(err){
//         console.log("Failed recursive rmdir");
//         return;
//     }
//     console.log("Successfully recursive rmdir")
// })

fs.rm('./a', {recursive: true}, err => {
    if(err){
        console.log("Failed recursive rmdir");
        return;
    }
    console.log("Successfully recursive rmdir")
})