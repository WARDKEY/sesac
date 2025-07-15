import { PrismaClient } from "@prisma/client";

// PrismaClient 인스턴스를 타입 지정해서 생성
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  errorFormat: "pretty",
});

export default prisma;
