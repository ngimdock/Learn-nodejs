const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("myEvent", (id, name) => {
  console.log(`Event triggered for ${name} id: ${id}`);
});

customEmitter.on("myEvent", () => {
  console.log("Another emitter logic here..");
});

customEmitter.emit("myEvent", 1, "dan");

setTimeout(() => {
  customEmitter.emit("myEvent", 2, "dilane");
}, 4000);
