const { readFile, writeFile } = require("fs");

console.log("Start create result file task");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return console.log({ err });

  const firstFileContent = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) return console.log({ err });

    const secondFileContent = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${firstFileContent}, ${secondFileContent}`,
      { flag: "a" },
      (err, result) => {
        if (err) return console.log({ err });

        console.log("Done create result file task");
      }
    );
  });
});
console.log("Start new Task..");
