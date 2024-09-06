// Import module
const me = require('./01_me.js')
// - `require` does not impact by working directory
// - `./` or `../` can not be omitted
// - when require `js` or `json` files, extension name can be omitted `./01_me`, 先js再json
// - require files with other extension will be treated as a js file


// Call
console.log(me)