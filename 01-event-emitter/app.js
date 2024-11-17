// /const EventEmitter = require("events");
const EventEmitter = require("./events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on("foo", () => {
  console.log("foo occurred 1");
});

myEmitter.on("foo", (x) => {
  console.log("foo occurred", x);
});

myEmitter.emit("foo");
myEmitter.emit("foo", "a");

myEmitter.once("bar", () => {
  console.log("bar occurred");
});

myEmitter.emit("bar");
myEmitter.emit("bar");
myEmitter.emit("bar");
