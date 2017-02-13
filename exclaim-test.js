var exclaim = require("./exclaim").exclaim;
var repeat = require("./repeat").repeat;

if (exclaim("hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log(".");
}
