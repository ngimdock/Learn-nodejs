const os = require("os");

// info about current user
const user = os.userInfo();
console.log({ user });

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  firstCPU: os.cpus()[0].model,
};

console.log({ currentOs });
