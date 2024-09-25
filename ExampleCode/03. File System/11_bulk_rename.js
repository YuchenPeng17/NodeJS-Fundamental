const fs = require('fs');

const files = fs.readdirSync('./')

files.forEach(item => {
    // split
    let data = item.split('_')
    if(data.length > 1){
        let num = data[0];
        let name = data.slice(1).join('_');
        if(Number(num) < 10){
            num = '0' + num;
        }
        let newName = num + '_' + name;
        fs.renameSync(`./${item}`, `./${newName}`);
    }

})