let arr = [10, 20, 30];
console.log(arr);
console.log(arr.length);

console.log();

let arr1 = new Array(3);
console.log(arr1);
console.log(arr.length);

let arr2 = new Array(3).fill(0);
console.log(arr2);

console.log();

// let fruits = ["사과", "바나나", "포도"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[1] = "오렌지";
// console.log(fruits);

let scores = [85, 92, 78];
for (let i = 0; i < scores.length; i++) {
  console.log(`${i + 1}번째 점수 : ${scores[i]}`);
}

// of는 배열을 사용할 때 사용
for (let score of scores) {
  console.log(score);
}

// in을 배열에 사용하면 인덱스 값 출력됨
for (let score in scores) {
  console.log(score);
}

console.log();

let fruits = ["사과", "오렌지"];
fruits.push("과일");
console.log(fruits);

console.log();

let removed = fruits.pop();
console.log(fruits);
console.log(removed);

console.log();

let nums = [1, 2, 3, 4];
nums.splice(2, 1, 99); // index 2에서 1개 삭제하고 99추가
console.log(nums);

console.log();

let part = nums.slice(1, 3);
console.log(part);

console.log();

console.log(nums.indexOf(2));
console.log(nums.indexOf(5));

console.log();

// 리터럴 방식의 객체 생성
let car = {
  brand: "Hyundai",
  model: "Sonata",
  year: 2022,
};

console.log(car);

// 생성자 방식의 객체 생성
let user = new Object();
user.name = "Alice";
user.age = 30;

console.log(user);

console.log();

let book = {
  title: "JavaScript",
  price: 15000,
};

// 점 표기법
console.log(book.title);
// 대괄호 표기법
console.log(book["price"]);

console.log();

let user1 = {};

// 추가
user1.name = "John";
user1["age"] = 28;

// 수정
user.age = 29;

// 삭제
delete user1.name;

console.log(user1);

console.log();

const user2 = {
  name: "Alice",
  age: 30,
};

console.log(Object.keys(user2)); // key 값 배열
console.log(Object.values(user2)); // value 값 배열
console.log(Object.entries(user2)); // key value 배열 따로

console.log();

const personA = {
  name: "Lee",
  age: 25,
  city: "Seoul",
};

const personB = {
  name: "Lee",
  age: 25,
  city: "Seoul",
};

console.log(personA === personB); // 참조값이 달라서 false

const personC = personA;

console.log(personA === personC); // 참조값이 같아서 true

// 값만 비교, JSON 형식으로 바꾸고 안의 String 값만 비교, 같아서 true
console.log(JSON.stringify(personA) === JSON.stringify(personB));

console.log();

// 배열이 적절한 경우
const scores2 = [85, 92, 78];

console.log(scores2[0]);

// 객체가 적절한 경우
const user3 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

console.log(user3.email);

console.log();

function func2() {
  console.log("func2 실행");
}

function func1() {
  console.log("func1 시작");
  func2();
  console.log("fun1 종료");
}

function main() {
  console.log("main 시작");
  func1();
  console.log("main 종료");
}

main();

console.log();

// 1. 변수에 함수를 할당
const greet = function () {
  console.log("Hello!");
};

greet();

console.log();

// 2. 함수를 인자로 전달
function execute(fn) {
  fn();
}

execute(function () {
  console.log("실행됨");
});

console.log();

// 3. 함수에서 함수를 반환
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5));

console.log();

// 4. 배열이나 객체에 저장
const actions = [
  function () {
    console.log("Run");
  },
  function () {
    console.log("Jump");
  },
];

actions[0]();

const obj = {
  speak: function () {
    console.log("Say something");
  },
};

obj.speak();

console.log();

// 5. 배열의 요소로 함수를 할당
const myArray = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArray[0](5, 10));
console.log(myArray[1](10, 5));

console.log();

