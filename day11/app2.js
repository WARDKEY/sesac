const math = require('./math2');
console.log(math);
console.log(math.add(math.PI, math.E)); 

// 객체 구조분해 할당으로 가져오기
const {add, E, PI} = require("./math2");
console.log(add(E,PI));

