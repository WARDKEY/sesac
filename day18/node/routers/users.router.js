const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authentication-middleware");
const prisma = require("../utils/prisma/index");
const bcrypt = require("bcrypt");
const {
  handleValidationResult,
  signUpValidator,
  loginValidator,
} = require("../middleware/validation-result-handler");

// jwt 설정
const jwt = require("jsonwebtoken");

// jwt 키
const SECRET_KEY = "sessac";

// router.get("/login", (req, res, next) => {
//   // 임시 데이터
//   const user = {
//     id: 1,
//     username: "홍길동",
//     role: "user",
//   };

//   // 데이터, 시크릿 키, 옵션
//   const token = jwt.sign(user, SECRET_KEY, {
//     expiresIn: "10s", // 만료시간
//   });

//   return res.json({
//     token,
//   });
// });

// // 인증 함수를 넣어서 콜백 함수보다 먼저 실행, 검증 후 콜백 함수 실행
// router.get("/user", authenticateToken, (req, res, next) => {
//   console.log(req.user);

//   // 비밀번호가 다를 때 에러 발생
//   // next(new Error("password"));
//   res.send(req.user);
// });

// // 세션
// router.get("/set-session", (req, res) => {
//   console.log(req.session.users);
//   // 처음 왔을 때
//   if (!req.session.users) {
//     req.session.users = 1;
//   } else {
//     req.session.users += 1;
//   }

//   res.send({
//     "접속유저 수": req.session.users,
//   });
// });

// // 쿠키
// router.get("/set-cookie", (req, res) => {
//   // 쿠키 설정 key, value
//   res.cookie("login", "true");
//   return res.send("Q");
// });

// router.get("/get-cookie", (req, res) => {
//   const cookie = req.cookies["login"];
//   console.log(cookie);
//   res.json({ cookie });
// });

/** 회원가입 API
 * 1. 이메일, 비밀번호, 닉네임 입력이 정확하게 왔는지 검증
 * 2. 비밀번호 6글자 이상
 * 3. 이메일이 중복이 있는지 확인
 * 4. 전부 통과하면 데이터 베이스에 저장
 */
router.post(
  "/sign-up",
  signUpValidator,
  handleValidationResult,
  async (req, res, next) => {
    // 입력 오류가 없는 경우

    const { email, password, nickname } = req.body;

    try {
      // 3. 이메일이 중복이 있는지 확인
      const user = await prisma.Users.findFirst({
        where: { email },
      });
      if (user) {
        return next(new Error("ExistEmail"));
      }

      // salt는 생성할 때마다 바뀜
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const bcryptPassword = await bcrypt.hash(password, salt);

      // 4. 전부 통과하면 데이터 베이스에 저장
      await prisma.Users.create({
        data: {
          email,
          password: bcryptPassword,
          nickname,
        },
      });

      res.status(201).json({
        message: "회원가입이 성공적으로 완료되었습니다.",
      });
    } catch (e) {
      return next(new Error("DataBaseError"));
    }
  }
);

/** 로그인 API
 * 1. 이메일, 비밀번호 입력 여부 확인
 * 2. 이메일에 해당하는 사용자 찾기
 * 3. 사용자 존재 여부
 * 4. 비밀번호 일치 여부
 * 5. JWT 토큰 발급
 * 6. 생성된 데이터를 전달
 */
router.post(
  "/login",
  loginValidator,
  handleValidationResult,
  async (req, res, next) => {
    const { email, password } = req.body;

    const user = await prisma.Users.findFirst({
      where: { email },
    });

    // 사용자가 없는 경우
    if (!user) {
      return next(new Error("UserNotFound"));
    }

    console.log(user);

    // 사용자가 있음

    const verifyPassword = await bcrypt.compare(password, user.password);
    console.log(verifyPassword);

    // 비밀번호 일치 X
    if (!verifyPassword) {
      return next(new Error("PasswordError"));
    }

    // JWT 토큰 발급
    const token = jwt.sign({ userId: user.userId }, SECRET_KEY, {
      expiresIn: "12h",
    });

    return res.status(200).send({
      token,
    });
  }
);

module.exports = router;
