const prisma = require("../utils/prisma/index.js");

class AuthRepository {
  async findUserByEmail(email) {
    return await prisma.Users.findFirst({
      where: { email },
    });
  }

  async createUser(email, password, nickname) {
    return await prisma.Users.create({
      data: {
        email,
        password,
        nickname,
      },
    });
  }
}

module.exports = new AuthRepository();
