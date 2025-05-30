const express = require("express");

// 라우터 함수 호출
const router = express.Router();

// 실습 1 데이터
const goods = [
  {
    goodsId: 1,
    goodName: "상품 1",
    category: "drink",
    price: 1000,
  },
];



// 상품 목록 조회
router.route("/").get((req, res) => {
  res.send({ goods });
});

// 상품 등록
router.route("/").post((req, res) => {
  goods.push(req.body);
  res.send({
    goods,
  });
});

// 상품 상세 조회
router.route("/:id").get((req, res) => {
  res.send({
    goodsId: 1,
    goodName: "상품 1",
    category: "drink",
    price: 1000,
  });
});

// 상품 수정
router.route("/:id").put((req, res) => {
  // req.body({
  //   goodsId: 2,
  //   goodName: "상품 2",
  //   category: "drink",
  //   price: 5000,
  // });

  res.send({
    goods: [
      {
        goodsId: 1,
        goodName: "상품 1",
        category: "drink",
        price: 1000,
      },
      req.body,
    ],
  });
});

// 상품 삭제
router.route("/:id").delete((req, res) => {
  res.send({
    goods: [
      {
        goodsId: 1,
        goodName: "상품 1",
        category: "drink",
        price: 1000,
      },
    ],
  });
});

// 라우팅 모듈 export
module.exports = router;
