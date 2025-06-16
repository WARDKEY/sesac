import express from "express";
import { prisma } from "./utils/prisma/index.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.post("/sign-up", async (req, res, next) => {
  const { email, password, name, age, gender, profileImage } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      message: "이메일, 비밀번호, 이름을 모두 입력해주세요.",
    });
  }

  if (password.listen < 6) {
    return res.status(400).json({
      message: "비밀번호는 최소 6자 이상이어야 합니다.",
    });
  }

  const isExistUser = await prisma.users.findFirst({
    where: { email },
  });

  if (isExistUser) {
    return res.status(400).json({
      message: "이미 존재하는 이메일입니다.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // 하나의 transaction으로 묶여서 두 테이블의 작업이 동시에 진행
    const newUser = await prisma.$transaction(async (tx) => {
      // User 테이블에 값 추가
      const user = await tx.users.create({
        data: {
          email,
          hashedPassword,
        },
      });

      // UserInfo 테이블에 값 추가
      const userInfo = await tx.userInfos.create({
        data: {
          userId: user.userId,
          name,
          age: age ? parseInt(age) : null,
          gender: gender ? gender.toUpperCase() : null,
          profileImage: null,
        },
      });
      return { user, userInfo };
    });
  } catch (e) {}
});

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 열림`);
});
