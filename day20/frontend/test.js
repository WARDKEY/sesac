// 들여쓰기
function great() {
  console.log("Hello");
}

function greet() {
console.log("Hello");
}

// 변수명
const userList = [];
const list = [];

// 함수명
function getUserName() {}

// 사용자가 로그인하지 않았을 때 홈으로 리다이렉션
if (!userList.isLoggedIn) {
  redirect("/");
}

// is, has 등
const map = new Map();

map.set("key1,", "value1");
map.set("key2,", "value2");

console.log(map.has("key1"));
console.log(map.has("key3"));

const test = [];

/** 
 * Git
 * 코드의 변경 이력을 저장
 * 팀원과 공유
 * 
 * 로컬 저장소
 * 원격 저장소 => Github
 * 
 * git init
 * git add . / 파일명
 * git status
 * git commit -m "커밋 메시지" => 스냅샷 생성
 * 
 * git remote add origin <주소>
 * 
 * git push origin main
 * 
 * git clone <주소> => 해당 프로젝트를 복제
 * 
 * git branch test
 * 
 * git checkout test
 * 
 * git checkout -b test2 => 생성과 동시에 이동
 * 
 * git merge test2  
 * 
 * git branch -d test2
 * 
 * main 
 * 
 * 
 * 1. 
 * 
 * 
 */
