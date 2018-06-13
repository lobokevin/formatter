const fs = require("fs");
const path = require("path");
const readline = require("readline");
let newLine = "";
const header = "```Javascript";
const footer = "```";
let data = []
data[0] = '```Javascript'

const inputReader = readline.createInterface({
  input: fs.createReadStream(path.resolve(process.argv[2]))
});

inputReader.on("line", line => {
  if (!line.includes("true") && !line.includes("false")) {
    if (line.length === 1) {
      newLine = newLine + ":";
    } else {
      newLine = line;
    }
  } else {
    newLine = newLine + " " + line;
    data.push(newLine);
    newLine = '';
  }
  
});

inputReader.on("close", () => {
  data.push('```');
  console.log(Object.values(data).forEach(l => console.log(l)));
});
