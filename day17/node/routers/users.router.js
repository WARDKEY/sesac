const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authentication-middleware");

// jwt 설정
const jwt = require("jsonwebtoken");

// jwt 키
const SECRET_KEY = "sessac";

router.get("/login", (req, res, next) => {
  // 임시 데이터
  const user = {
    id: 1,
    username: "홍길동",
    role: "user",
  };

  // 데이터, 시크릿 키, 옵션
  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: "10s", // 만료시간
  });

  return res.json({
    token,
  });
});

// 인증 함수를 넣어서 콜백 함수보다 먼저 실행, 검증 후 콜백 함수 실행
router.get("/user", authenticateToken, (req, res, next) => {
  console.log(req.user);

  // 비밀번호가 다를 때 에러 발생
  // next(new Error("password"));
  res.send(req.user);
});

// 세션
router.get("/set-session", (req, res) => {
  console.log(req.session.users);
  // 처음 왔을 때
  if (!req.session.users) {
    req.session.users = 1;
  } else {
    req.session.users += 1;
  }

  res.send({
    "접속유저 수": req.session.users,
  });
});

// 쿠키
router.get("/set-cookie", (req, res) => {
  // 쿠키 설정 key, value
  res.cookie("login", "true");
  return res.send("Q");
});

router.get("/get-cookie", (req, res) => {
  const cookie = req.cookies["login"];
  console.log(cookie);
  res.json({ cookie });
});

module.exports = router;
