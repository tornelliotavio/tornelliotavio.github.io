const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('pdr.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  let arr = [];
  const category = 'cream';
  const image = 'https://dummyimage.com/600x400/55595c/fff';

  for await (let line of rl) {
    if (line.length > 0) {
      let split = line.split(' ');
      let cod = split.splice(0, 1)[0];
      let name = split.join(' ');
      arr.push({ cod, name, category, image });
    }
  }
  console.log(JSON.stringify(arr));
}

processLineByLine();
