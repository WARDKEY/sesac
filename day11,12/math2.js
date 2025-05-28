const add = (a, b) => a + b;
const E = 2.718;
const PI = 3.141592;

// case1
module.exports = {
  add,
  E,
  PI,
};

// cass2 하나의 모듈 파일에 여러 개 만들기
module.exports.add = add;
module.exports.E = E;
module.exports.PI = PI;

// cass2 module 생략
exports.add = add;
exports.E = E;
exports.PI = PI;
