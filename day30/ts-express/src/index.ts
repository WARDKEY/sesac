import express, { Request, Response } from "express";
import userRouter from "./routes/user.route";
import cors from "cors";

// express 생성
const app = express();

// port
const PORT: number = 4000;

// post 설정
app.use(express.json());

// cors 설정
app.use(cors());

// router 등록
app.use("/users", userRouter);

// route, home화면
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express");
});

// port 설정
app.listen(PORT, () => {
  console.log(`Server Running ${PORT} port`);
});
