const { readFile, writeFile } = require("fs");
const util = require("util");
const writeFilePromise = util.promisify(writeFile);

const readFileCustomPromise = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8", (err, data) => {
      if (err) return reject(err);

      resolve(data);
    });
  });
};

// getFileText("./content/first.txt")
//   .then((result) => console.log({ result }))
//   .catch((err) => console.log({ err }));

const fusionFiles = async () => {
  try {
    const firstFileContent = await readFileCustomPromise("./content/first.txt");
    const secondFileContent = await readFileCustomPromise(
      "./content/second.txt"
    );

    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `Here is the result: ${firstFileContent}, ${secondFileContent}`
    );

    console.log(`New file created in the folder 'content'`);
  } catch (err) {
    console.log({ err });
  }
};

fusionFiles();
