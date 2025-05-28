const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car); // format: JSON
console.log();

// 역질렬화 : JSON.parse() -> 통신하여 받은 데이터를 객체로 보관
// json -> obj, 객체로 변환
const obj = JSON.parse(car);
console.log(obj);
console.log();

// obj 변수는 js object이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 가능
console.log(obj.model);
console.log(obj.price);
console.log(obj.hello);
console.log();

// 직렬화 : JSON.stringfy() -> 통신하기 쉬운 포맷(JSON)으로 변환
// obj -> json, json으로 변환
const json = JSON.stringify(car);
console.log(json, typeof json);
console.log();

// json 변수는 JSON 형태의 "문자열"이므로
// .(dot)/[] 연산자를 이용해서 키 값에 접근 불가능
console.log(json.model);
console.log(json.price);
console.log(json.hello);

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 내장 메서드들은 쓸 수 있다.
