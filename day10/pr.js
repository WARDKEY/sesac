// Map 자료구조
const myMap = new Map();

// 객체와는 달리 key 값을 원하는 타입으로 지정 가능
// myMap.set("name", "Alice");
// myMap.set(1, "numberKey");
// myMap.set(true, "boolKey");

// console.log(myMap.get("name"));
// console.log(myMap.get(1));
// console.log(myMap.get(true));

// console.log(myMap.size);
// console.log();

// const myMap2 = new Map();
// myMap2.set("one", 1);
// myMap2.set("two", 2);
// myMap2.set("three", 3);

// for (const key of myMap2.keys()) {
//   console.log(key);
// }

// for (const value of myMap2.values()) {
//   console.log(value);
// }

// for (const [key, value] of myMap2.entries()) {
//   console.log(`${key}: ${value}`);
// }
// console.log();

// Set 자료구조
// const mySet = new Set();
// mySet.add("apple");
// mySet.add("banana");
// mySet.add("apple"); // 중복 무시

// console.log(mySet.has("apple"));
// console.log(mySet.size);
// console.log();

// const fruits = new Set(["apple", "banana", "cherry"]);

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// console.log();

// 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(2, 3));

// const arr = [1, 2, 3];
// const doubled = arr.map((x) => x * 2);
// console.log(doubled);
// console.log();

// 비동기
// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// console.log("3");
// console.log();

// fetch
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("에러 발생:", error));
console.log();

// promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("성공!");
//   }, 1000);
// });

// promise.then((result) => console.log(result));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("에러발생");
//   }, 1000);
// });

// promise.catch((error) => console.log(error));

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(10), 1000);
//   });
// }

// fetchData()
//   .then((data) => data + 5)
//   .then((result) => console.log(result));

// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("1번 완료"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("2번 완료"), 15000)
// );
// const p3 = new Promise((resolve) => setTimeout(() => resolve("3번 완료"), 500));

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => console.log("에러 발생:", err));

// async

// function delay() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("완료"), 1000;
//     })
//   );
// }

// async function start() {
//   const result = await delay();
//   console.log(result);
// }

// start();

// function fail() {
//   return new Promise((_, reject) => setTimeout(() => reject("에러"), 1000));
// }

// async function execute() {
//   try {
//     await fail();
//   } catch (err) {
//     console.log(err);
//   }
// }

// execute();

// function fetchUser() {
//   return new Promise((resolve) => setTimeout(() => resolve("유저")), 3000);
// }

// function fetchPosts() {
//   return new Promise((resolve) => setTimeout(() => resolve("게시물"), 3000));
// }

// async function loadPage() {
//   const user = await fetchUser();
//   const posts = await fetchPosts();
//   console.log(user, posts);
// }

// loadPage();
console.log();

// 콜백 함수
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = "Alice";
//   callback(name);
// }

// processUserInput(greet);
// console.log();

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function substract(x, y) {
//   return x - y;
// }

// console.log(calculate(5, 3, add));
// console.log(calculate(5, 3, substract));
// console.log();

// 콜백 함수 제어권
// var newArr = [10, 20, 30].map(function (currentValue, index) {
//   console.log(currentValue, index);
//   return currentValue + 5;
// });

// console.log(newArr);

// var wrongArr = [10, 20, 30].map(function (index, currentValue) {
//   console.log(index, currentValue);
//   return currentValue + 5;
// });

// console.log(wrongArr);
// console.log();

// 호이스팅
// function example(x) {
//   console.log(x);
//   var x;
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// example(1);
// console.log();

// function test() {
//   console.log(b);
//   var b = "bbb";
//   console.log(b);
//   function b() {}
//   console.log(b);
// }
// test();
// console.log();

// 함수 선언문 -> 함수 전체가 그대로 올라감
function sum(a, b) {
  return a + b;
}

// 함수 표현식 -> 호이스팅 되면 var multiply인 선언부만 넘어가서 error
// var multiply = (a, b) => {
//   return a * b;
// };

// console.log(sum(1, 2));
// console.log(multiply(3, 4));
// console.log();

// const x = 1;
// function outer() {
//   const y = 2;
//   function inner() {
//     const z = 3;
//     console.log(x, y, z);
//   }
//   inner();
// }
// outer();
// console.log();

// this
// 일반 함수
// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();
// console.log();

// // 화살표 함수
// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!

var test = {
  test: "!!!",
  testMethod: function () {
    console.log(this);
  },
};
test.testMethod();

// var a = 1;
// var outer = function () {  // 위치가 global이라 this는 global
//   console.log("ouster: " + this);
//   var inner = function () {
//     console.log("inner: " + this);
//     var a = 3;
//   };
//   inner();
//   console.log(a);
// };
// outer();
// console.log(a);

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
  this.company = company;
}
var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");
