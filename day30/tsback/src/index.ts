import dotenv from "dotenv";
import express, { Application } from "express";

import userRouter from "./routers/users.router";
import errorHandlingMiddleware from "./middleware/error-handling-middleware";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 라우터 등록
app.use("/", userRouter);

// 오류 처리 미들웨어 등록
app.use(errorHandlingMiddleware);

// 서버 실행
app.listen(PORT, () => {
  console.log(`${PORT} 포트로 서버가 열림`);
});
