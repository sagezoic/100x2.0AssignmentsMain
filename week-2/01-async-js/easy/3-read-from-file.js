const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  for(i=0;i<1000;i++){

  }

  console.log("Remaining lines...");