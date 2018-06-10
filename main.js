const fs = require('fs');
const path = require('path');
const readline = require('readline');
let data = '';
const header = '```Javascript';
const footer = '```';

const inputReader = readline.createInterface({
  input: fs.createReadStream(path.resolve(process.argv[2]))
});

inputReader.on('line', line => {
  console.log(line);
  line = line.split(':');

  line.forEach(word => {
    console.log(data);
    if (word === 'True' || word === 'False'){
      data = data + '\n';
    } else {
      data = data + word + ':';
    }
  });

});

inputReader.on('close', () => {
  data = header + data + footer;
  console.log(data);
});
