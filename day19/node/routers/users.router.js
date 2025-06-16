const express = require("express");
const router = express.Router();
const prisma = require("../utils/prisma/index");
const bcrypt = require("bcrypt");
const {
  handleValidationResult,
  signUpValidator,
  loginValidator,
} = require("../middleware/validation-result-handler");
const authController = require("../controllers/auth.controller.js");

// jwt 설정
const jwt = require("jsonwebtoken");

// jwt 키
const SECRET_KEY = "sessac";

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
  authController.signUp
);

// router.post(
//   "sign-up",
//   signUpValidator,
//   handleValidationResult,
//   async (req, res, next) => {
//     // 입력 오류가 없는 경우

//     const { email, password, nickname } = req.body;

//     try {
//       // 3. 이메일이 중복이 있는지 확인
//       const user = await prisma.Users.findFirst({
//         where: { email },
//       });
//       if (user) {
//         return next(new Error("ExistEmail"));
//       }

//       // salt는 생성할 때마다 바뀜
//       // 비밀번호 암호화
//       const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       const bcryptPassword = await bcrypt.hash(password, salt);

//       // 4. 전부 통과하면 데이터 베이스에 저장
//       await prisma.Users.create({
//         data: {
//           email,
//           password: bcryptPassword,
//           nickname,
//         },
//       });

//       res.status(201).json({
//         message: "회원가입이 성공적으로 완료되었습니다.",
//       });
//     } catch (e) {
//       return next(new Error("DataBaseError"));
//     }
//   }
// );

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
  authController.login
);

// router.post(
//   "/login",
//   loginValidator,
//   handleValidationResult,
//   async (req, res, next) => {
//     const { email, password } = req.body;

//     const user = await prisma.Users.findFirst({
//       where: { email },
//     });

//     // 사용자가 없는 경우
//     if (!user) {
//       return next(new Error("UserNotFound"));
//     }

//     console.log(user);

//     // 사용자가 있음

//     // 비밀번호 복호화
//     const verifyPassword = await bcrypt.compare(password, user.password);
//     console.log(verifyPassword);

//     // 비밀번호 일치 X
//     if (!verifyPassword) {
//       return next(new Error("PasswordError"));
//     }

//     // JWT 토큰 발급
//     const token = jwt.sign({ userId: user.userId }, SECRET_KEY, {
//       expiresIn: "12h",
//     });

//     return res.status(200).send({
//       token,
//     });
//   }
// );

module.exports = router;
