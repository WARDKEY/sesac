// async function f1() {
//   return 1;
// }

// async function f2() {
//   return Promise.resolve(1);
// }

// console.log("1 >> ", f1());
// f1().then(function (result) {
//   console.log("2 >> ", result); // 1
// });

// console.log("3 >> ", f2());
// f2().then(function (result) {
//   console.log("4 >> ", result); // 1
// });

// const f3 = async () => {
//   return 3;
// };

function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!"));
    }, 1000);
  });
}

// const temp = [];
// fetchFruits()
//   .then(function (f) {
//     f.forEach((fruit) => {
//       temp.push(fruit);
//     });
//     console.log(f);
//     console.log(temp);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log(temp);

// async function printItems() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }

// printItems();

// 예제2

let product;
let price;

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다...");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로콜라";
      price = 2000;
      reject();
      // resolve()
    }, 3000);
  });
}

function pay() {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

function noPay() {
  console.log("금액 부족ㅠ");
}

async function exec() {
  try {
    goMart();
    await pickDrink().then(() => pay());
    // pay();
  } catch (e) {
    noPay();
  }
}

exec();
