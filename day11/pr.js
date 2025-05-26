// 배열 구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [tomato, kiwi, banana] = arr5;
console.log(tomato);
console.log();

let lists = ["apple", "grape"];
[item1, item2, item3 = "peach"] = lists;
console.log("item1 :", item1);
console.log("item2 :", item2);
console.log("item2 :", item2);
console.log();

// 객체 구조 분해 할당
let { a, b } = { a: 10, b: 20 };
console.log("a : ", a);
console.log("b : ", b);
console.log();

// spread 문법
// const a = [1, 2, 3];
// const b = [4, 5];
// const spread = [...a, ...b];
// console.log(spread);

// const c = [..."hello"];
// console.log(c);

// rest 문법
const values = [10, 20, 30];

function get(a, ...rest) {
  console.log(rest);
}

get(...values);
console.log();

// 실습 문제
const word1 = "abc";
const word2 = "xyz";

const result = [...word1, ...word2];
console.log(result);
console.log();

// 클래스
class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(`건축한지 ${2023 - this.year}년 되었어요`);
  }
}

class Apartment extends House {
  constructor(name, year) {
    super(name, year);
  }

  getAge() {
    this.age();
  }
}

const test = new Apartment("테스트", 25);
test.getAge();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());
console.log();

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getDae() {
    return Math.sqrt(this.width + this.height);
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getDae());
console.log();

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getWidth() {
    return (this.width * this.height) / 2;
  }
}

let tri = new Triangle(4, 2);
console.log(tri.getWidth());
console.log();

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return 3.141592 * this.radius ** 2;
  }
}

let cir = new Circle(3, 4, 2);
console.log(cir.getArea());
