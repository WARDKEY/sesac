console.log(5 << 1);
console.log(3 << 2);
console.log(8 >> 1);
console.log(5 >> 1);
console.log(-8 >> 1);
console.log(8 >>> 1);
console.log(-8 >>> 1);
console.log(3 + ((4 * 5) % 2));
console.log((3 % 4) * 5);
console.log();

console.log(5 < 10);
console.log(5 >= 5);
console.log("a" < "b");
console.log("apple" > "banana"); // 첫 번째 글자만 비교
console.log();

// let a = 10;
let b = 6;
// let c = a & b; // 비트 연산
// console.log("c = ", c);
console.log();

let age = 20;
let result = age >= 18 ? "성인" : "미성년자";
console.log(result);
console.log();

console.log("=");
let a = 10;
console.log("a = ", a);

console.log("+=");
a += 5;
console.log("a += 5 -> ", a);

console.log("-=");
a -= 3;
console.log("a -= 3 -> ", a);

console.log("*=");
a *= 2;
console.log("a *= 2 -> ", a);

console.log("/=");
a /= 4;
console.log("a /= 4 -> ", a);

console.log("%=");
a %= 4;
console.log("a %= 4 -> ", a);

console.log("**");
a **= 3;
console.log("a **= 3 -> ", a);
console.log();

let a1 = -2;

if (a1 < 0) {
  console.log("a1는 음수입니다.");
}
console.log("안녕하세요!" + "\n");

let a2 = -12;
if (a2 < 0) {
  console.log("a2는 음수입니다.");
  console.log("안녕하세요!");
}

if (a2 > 0) {
  console.log("a2는 양수입니다.");
  console.log("안녕하세요!");
}
console.log();

let num = 7;

if (num % 2 === 0) {
  console.log(`${num}는 짝수입니다.`);
} else {
  console.log(`${num}는 홀수입니다.`);
}
console.log();

let jumsu = 90;

if (jumsu >= 90) {
  console.log("A학점 입니다.");
} else if (jumsu >= 80) {
  console.log("B학점 입니다.");
} else if (jumsu >= 70) {
  console.log("C학점 입니다.");
} else {
  console.log("F학점 입니다.");
}
console.log();

let grade = "B";

switch (grade) {
  case "A":
    console.log("훌륭합니다.");
    break;
  case "B":
    console.log("좋습니다.");
    break;
  case "C":
    console.log("보통입니다.");
    break;
  default:
    console.log("노력합시다!");
}

console.log();

switch (grade) {
  case "A":
    console.log("훌륭합니다.");
  case "B":
    console.log("좋습니다.");
  case "C":
    console.log("보통입니다.");
  default:
    console.log("노력합시다!");
}

console.log();

jumsu = 100;
switch (jumsu) {
  case 100:
    console.log("A학점 입니다.");
    break;
  case 99:
    console.log("A학점 입니다.");
    break;
  case 98:
    console.log("A학점 입니다.");
    break;
  case 97:
    console.log("A학점 입니다.");
    break;
  case 96:
    console.log("A학점 입니다.");
    break;
  case 95:
    console.log("A학점 입니다.");
    break;
  case 94:
    console.log("A학점 입니다.");
    break;
  case 93:
    console.log("A학점 입니다.");
    break;
  case 92:
    console.log("A학점 입니다.");
    break;
  case 91:
    console.log("A학점 입니다.");
    break;
  case 90:
    console.log("A학점 입니다.");
    break;
  case 89:
    console.log("B학점 입니다.");
    break;
  case 88:
    console.log("B학점 입니다.");
    break;
  case 87:
    console.log("B학점 입니다.");
    break;
  case 86:
    console.log("B학점 입니다.");
    break;
  case 85:
    console.log("B학점 입니다.");
    break;
  case 84:
    console.log("B학점 입니다.");
    break;
  case 83:
    console.log("B학점 입니다.");
    break;
  case 82:
    console.log("B학점 입니다.");
    break;
  case 81:
    console.log("B학점 입니다.");
    break;
  case 80:
    console.log("B학점 입니다.");
    break;
  case 79:
    console.log("C학점 입니다.");
    break;
  case 78:
    console.log("C학점 입니다.");
    break;
  case 77:
    console.log("C학점 입니다.");
    break;
  case 76:
    console.log("C학점 입니다.");
    break;
  case 75:
    console.log("C학점 입니다.");
    break;
  case 74:
    console.log("C학점 입니다.");
    break;
  case 73:
    console.log("C학점 입니다.");
    break;
  case 72:
    console.log("C학점 입니다.");
    break;
  case 71:
    console.log("C학점 입니다.");
    break;
  case 70:
    console.log("C학점 입니다.");
    break;
  default:
    console.log("F학점 입니다.");
}

console.log();

for (let a = 1; a <= 10; a = a + 2) {
  console.log(`a = ${a}`);
}

console.log();

for (let a = 1; a <= 100; a++) {
  if (a % 2 === 0) {
    console.log(`a = ${a}`);
  }
}

console.log();

const fruits = ["사과", "바나나", "포도"];

console.log();

let a3 = 1;

do {
  console.log(`a3 = ${a3}`);
  a3++;
} while (a <= 3);

let a4 = 5;

do {
  console.log(`최초 실행 : a4 = ${a4}`);
} while (a < 0);

console.log();

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i= ${i}, j=${j}`);
  }
}

for (let i = 1; i <= 2; i++) {
  console.log(`외부 for문이 ${i}번째 턴이 시작됩니다.`);

  for (let j = 1; j <= 3; j++) {
    console.log(`내부 for문의 ${j}턴입니다.`);
  }
  console.log(`외부 for문의 ${i}번째 턴이 종료됩니다.`);
}

console.log();

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(`i = ${i}`);
}

console.log();

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 3; b++) {
    if (a % 2 !== 0) {
      break;
    }
    console.log(`a = ${a}, b = ${b}`);
  }
}

console.log();

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 3; b++) {
    if (a % 2 !== 0) {
      continue;
    }
    console.log(`a = ${a}, b = ${b}`);
  }
}

// if문을 이용해 사용자가 입력한 수가 짝수인지 아닌지 판단하는 예제

let number = 3;

if (number % 2 === 0) {
  console.log(`${number}는 짝수입니다.`);
} else {
  console.log(`${number}는 홀수입니다.`);
}

console.log();

// 1부터 100까지의 합을 구해 출력하는 프로그램

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`1부터 100까지의 합은 ${sum}입니다.`);

console.log();

// 반복문을 이용한 구구단의 출력 방법 출력 모양

//     1단 2단 3단

//      4단 5단 6단

//      7단 8단 9단

for (i = 1; i < 4; i++) {
  for (j = 1; j < 10; j++) {
    if (i === 1) {
      console.log(
        `${i} * ${j} = ${i * j}  ${i + 1} * ${j} = ${(i + 1) * j}  ${
          i + 2
        } * ${j} = ${(i + 2) * j}`
      );
    }
    if (i === 2) {
      console.log(
        `${i + 2} * ${j} = ${(i + 2) * j}  ${i + 3} * ${j} = ${(i + 3) * j}  ${
          i + 4
        } * ${j} = ${(i + 4) * j}`
      );
    }
    if (i === 3) {
      console.log(
        `${i + 4} * ${j} = ${(i + 4) * j}  ${i + 5} * ${j} = ${(i + 5) * j}  ${
          i + 6
        } * ${j} = ${(i + 6) * j}`
      );
    }
  }
  console.log();
}

console.log();

// 10개의 점수를 랜덤으로 생성하여 점수의 평균과 최대값 그리고 최소값을 구하는 예 제.
// 단, 이때 점수는 0 ~ 100점 사이에 있다고 가정한다(랜덤 함수 사용법 검색!!)

let min = 1000;
let max = 0;
let sum1 = 0;

for (let i = 0; i < 10; i++) {
  let rand = Math.floor(Math.random() * 101);
  sum1 += rand;

  if (min > rand) {
    min = rand;
  }

  if (max < rand) {
    max = rand;
  }
}

console.log(`평균 = ${sum1 / 10}, 최대값 = ${max}, 최소값 = ${min}`);

console.log();

// 일차방정식의 풀이에 대한 예제. 남편과 아내의 나이의 합은 75살이고 나이의 곱은 1400이다.
// 아내보다 남편의 나이가 더 많다고 할 때 남편과 아내의 나이는 각 몇 살인지 찾아내는 프로그램을 작성해라.
// 단, 남편과 아내의 나이는 100살을 넘지 않는다.

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    if (i + j == 75 && i * j == 1400 && i > j) {
      console.log(`남편의 나이는 ${i}살이고, 아내의 나이는 ${j}살 입니다.`);
    }
  }
}

console.log();

// 여자의 자동차는 시속 120Km으로 달리고 있고 남자의 자동차는 시속 180Km로 달리고 있다.
// 여자의 자동차는 현재 출발지점에서 24Km를 진행한 상태이고 남자는 출발지점에서 6Km를 진행한 상태이다.
// 남자는몇 분 뒤에 여자의 자동차를 추월하게 되는지를 알아내는 프로그램을 작성하여라

let minu = 0;

for (let w = 24, m = 6; w <= 10000 && m <= 10000; w = w + 2, m = m + 3) {
  if (m > w) {
    console.log(`남자는 ${minu}분 뒤에 추월합니다.`);
    break;
  }
  minu++;
}
