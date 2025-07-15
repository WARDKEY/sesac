import prisma from "../utils/prisma/prisma";
import { Users } from "@prisma/client";

class AuthRepository {
  // 이메일로 사용자 조회
  async findUserByEmail(email: string): Promise<Users | null> {
    return await prisma.users.findFirst({
      where: { email },
    });
  }

  // 사용자 생성
  async createUser(
    email: string,
    password: string,
    nickname: string
  ): Promise<Users> {
    return await prisma.users.create({
      data: {
        email,
        password,
        nickname,
      },
    });
  }
}

export default new AuthRepository();
