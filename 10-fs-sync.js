const { readFileSync, writeFileSync } = require("fs");

console.log("Start create result file task");
const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");

console.log(firstFile);

writeFileSync(
  "./content/result-sync.txt",
  `Here this is the result: ${firstFile},  ${secondFile}`,
  { flag: "a" }
);

console.log("Done create result file task");
console.log("Start next Task..");
