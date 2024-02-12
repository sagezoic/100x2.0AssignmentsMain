const fs = require('fs');
const content = 'Some more new content!';

fs.writeFile('test.txt', content, { flag: 'a' }, err => {
    if(err){
        console.log(err);
    }else {
        console.log('Content successfully saved!');
    }
});