const express = require("express");
const router = express.Router();
const controller = require("../controller/mainController");
const db = require("../config/db");

// 라우터는 전달만 하는 역할
router.route("/").get(controller.getMain);

router.route("/").post(controller.postMain);

router.route("/:id").get(controller.getId);

// 실습

// 테이블 생성
router.route("/api/tables").post(async (req, res, next) => {
  const { tableName } = req.body;
  console.log(tableName);

  // 실제 테이블 생성
  await db.query(`CREATE TABLE IF NOT EXISTS ${tableName}
    (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);

  return res.json({
    message: "테이블 생성에 성공하였습니다.",
  });
});

// 테이블 조회
router.route("/api/tables").get(async (req, res, next) => {
  res.send();
});

// 데이터 삽입
router.route("/api/tables/:tableName/items").post((req, res, next) => {
  res.send("데이터 값 등록");
});

// 데이터 조회
router.route("/api/tables/:tableName/items").get((req, res, next) => {
  res.send("데이터 값 조회");
});

module.exports = router;
