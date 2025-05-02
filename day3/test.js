let age = 20;

console.log(age);

age = 21; // 값 변경 가능

console.log(age);

const PI = 3.14159;
console.log(PI);

// PI = 3.14; 상수는 재할당 안 됨

let score = 95; // 선언부 + 대입부

console.log(score); // 호출부 95 출력

// const는 이렇게 써야 함 (선언과 동시에 대입)
const maxScore = 100;

// var
var x = 1;
var x = "문자열"; // ❗ 타입도 바뀜 주의

// 정수형 숫자(Integer)
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"

// 실수형 숫자(Float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

// 지수형 숫자(Exponential)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"

// NaN(Not a Number)
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number" -> NaN은 숫자로 인식(나눗셈 연산은 숫자만 가능하기 떄문)

// Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"

let greeting = "Hello";
let name = "Alice";
let sentence = `My name is ${name}`; // `(백틱) 사용하면 내부에 변수 사용 가능
console.log(greeting);
console.log(name);
console.log(sentence);

// 문자열 길이
console.log("Hello".length);

let str = "Hello world!";
// 문자열 자르기
console.log(str.substr(7, 5));
console.log(str.slice(7, 12));

// 문자열 검색
console.log(str.search("world"));

// 문자열 대체
let result = str.replace("world", "JavaScript");
console.log(result);

const id1 = Symbol("userId");
const id2 = Symbol("userId");

console.log(id1 === id2); // false
console.log(typeof id1); // "symbol"

// 객체에 심볼 키 추가 -> 유일한 값의 키로 이용 가능
const user = {
  name: "kim",
  [id1]: 12345,
};

console.log(user[id1]); // 12345

const user1 = {
  // let도 사용할 수 있지만 const를 사용하면 객체 전체를 재할당 불가
  name: "Lee",
  greet: function () {
    console.log("Hello!");
  },
};

user1.greet(); // Hello!

let result1 = 2 + 3 * 4;
let result2 = (2 + 3) * 4;

console.log(result1);
console.log(result2 + "\n");

const user3 = { name: "Kim", age: 30 };
console.log(user3.name);

const user4 = {
  "user-id": 101,
  name: "새싹",
};

const key = "name";
console.log(user4[key]);
console.log(user4["user-id"]);

const arr = ["apple", "banana"];
console.log(arr[0]);

const user5 = null;
// console.log(user5.name);
console.log(user5?.name); // undefined로 나옴

// let a = 5;
// let b = a++;

// console.log(a);
// console.log(b);

let a = 5;
let b = 5;

console.log("a = " + a + ", " + ++a);
console.log("a = " + a);

console.log("b = " + b + ", " + b--);
console.log("b = " + b);

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!"hello");
console.log(!undefined);
console.log(!!"hello");
console.log(!!0);

console.log(~5);
console.log(~0);
console.log(~-1);

console.log(2 + 3 * 4 + (5 % 2));
console.log((3 % 4) * 5);
