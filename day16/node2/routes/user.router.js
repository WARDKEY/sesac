import express from "express";
import { prisma } from "../utils/prisma/index.js";

const router = express.Router();

// 새로운 유저 추가
router
  .route("/users")
  .post(async (req, res, next) => {
    const { email, password, nickname } = req.body;

    try {
      // unique 값으로 한 명의 유저 검색
      const existingUser = await prisma.Users.findUnique({
        where: { email },
      });

      // 기존에 DB에 이메일이 있는지 학인
      if (existingUser) {
        return res.send({
          // 이메일이 있으면 중복 안내
          message: "중복된 아이디가 있습니다.",
        });
      }

      // 새로운 유저 생성, 컬럼 추가
      const newUser = await prisma.Users.create({
        data: {
          nickname,
          email,
          password,
        },
      });
      return res.send({
        message: "회원가입 완료!",
        newUser,
      });
    } catch (e) {
      console.log(e);
    }
  })
  // 다 찾기
  .get(async (req, res) => {
    const users = await prisma.Users.findMany();
    res.send(users);
  });

// 첫 번째로 찾은 거 하나
router.route("/user").get(async (req, res) => {
  const user = await prisma.Users.findFirst();
  res.send(user);
});

export default router;
