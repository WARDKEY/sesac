const path = require("path");
console.log(__dirname);

const add = path.join(__dirname, "controllers", "math.js");


console.log(add(3,4));