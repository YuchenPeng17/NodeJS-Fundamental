// Function Declaration
function cook(){
    console.log("Start Cooking...")
}

function clean(){
    console.log("Start Cleaning...")
}


// 1) Export: module.exports = {}
module.exports = {
    cook,
    clean
}

// 2) Export: exports.<> = <>
exports.cook = cook;
exports.clean = clean;

// 1!: module.exports = string / number / function ....
//     can export any type of variable

// 2!: exports = .... is unable to export
//     only module.exports is exported, exports = module.exports = {}
    