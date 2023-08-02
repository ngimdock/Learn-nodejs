const { readFile } = require("fs");

console.log("Start first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return console.log({ err });

  console.log({ result });
  console.log("End reading file.");
});
console.log("Start next task");
