// 명시적 타입 선언

// string

// 타입 추론
let username = "Alice"; // 선언될 때 타입 추론하고 타입 지정(string)
let message: string = `Hello, ${username}`;

// number
// NaN, Infinity 숫자 취급
let age: number = 27;
let pi: number = 3.14;

// boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// null, undefined
// strictNullChecks tsconfig 에 설정해야 사용 가능
let nothing: null = null;
let notAssigned: undefined = undefined;

// any
let data: any = 123;
data = "문자열도 가능";
data = true;

// unknown
let value: unknown = "문자열";

// 사용 전 타입 검사 필요
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// void
// 함수가 값을 반환하지 않을 때 사용
function logMessage(message: string): void {
  console.log(message);
}

// never
// 절대 반환하지 않는 함수에 사용, 에러 처리
function throwError(): never {
  throw new Error("예외 발생");
}

// object
let obj: object = { name: "Alice" };

let obj2: { name: string } = { name: "Alice" };

// 배열
let fruits: string[] = ["apple", "banana", "orange"];
