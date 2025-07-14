import express, { Request, Response, Router } from "express";
import { User } from "../types/user";

// router 설정, express 안에 타입있음
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const users: string[] = ["Alice", "Bob", "Charlie"];
  res.json({ users });
});

router.post("/", (req: Request, res: Response) => {
  console.log("정상 post요청");

  // body로 들어오는 값의 경우 타입 명확하게 지정 (인터페이스나 타입 만들기도 함)
  const { name } = req.body as { name: string };
  const newUser: User = {
    id: 1,
    name: "name",
    email: "example@example.com",
  };

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  res.status(201).json({ message: `User ${name} created` });
});

export default router;
