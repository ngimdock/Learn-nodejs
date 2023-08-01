const path = require("path");

const platformSeparator = path.sep;

console.log({ platformSeparator });

const filePath = path.join("/content", "subfolder", "test.txt");

console.log({ filePath });

const baseName = path.basename(filePath);
const extName = path.extname(filePath);

console.log({ baseName, extName });

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);

console.log({ absolutePath });
