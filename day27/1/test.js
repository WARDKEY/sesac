// string
var username = "Alice";
var message = "Hello, ".concat(username);
// number
// NaN, Infinity 숫자 취급
var age = 27;
var pi = 3.14;
// boolean
var isLoggedIn = true;
var hasPermission = false;
// null, undefined
// strictNullChecks tsconfig 에 설정해야 사용 가능
var nothing = null;
var notAssigned = undefined;
// any
var data = 123;
data = "문자열도 가능";
data = true;
// unknown
var value = "문자열";
// 사용 전 타입 검사 필요
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// void
// 함수가 값을 반환하지 않을 때 사용
function logMessage(message) {
    console.log(message);
}
// never
// 절대 반환하지 않는 함수에 사용, 에러 처리
function throwError() {
    throw new Error("예외 발생");
}
// object
var obj = { name: "Alice" };
var obj2 = { name: "Alice" };
