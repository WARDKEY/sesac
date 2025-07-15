import dotenv from "dotenv";
dotenv.config();
import express, { Router } from "express";

import prisma from "../utils/prisma/prisma";
import bcrypt from "bcrypt";
import userController from "../controllers/user.controller";
import jwt from "jsonwebtoken";

const router: Router = express.Router();

const SECRET_KEY: string | undefined = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("SECRET_KEY is not defined in environment variables");
}

/** 회원가입 API
 * 1. 이메일, 비밀번호, 닉네임 입력이 정확하게 왔는지 검증
 * 2. 비밀번호 6글자 이상
 * 3. 이메일이 중복이 있는지 확인
 * 4. 전부 통과하면 데이터 베이스에 저장
 */
router.post("/sign-up", userController.signUp);

/** 로그인 API
 * 1. 이메일, 비밀번호 입력 여부 확인
 * 2. 이메일에 해당하는 사용자 찾기
 * 3. 사용자 존재 여부
 * 4. 비밀번호 일치 여부
 * 5. JWT 토큰 발급
 * 6. 생성된 데이터를 전달
 */
router.post("/login", userController.login);

export default router;
