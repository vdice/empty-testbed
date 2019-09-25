const { events } = require("@brigadecore/brigadier")
const circle = require("./local-deps/circle");

events.on("exec", function (e, p) {
  console.log("area of a circle with radius 3 " + circle.area(3));
});
