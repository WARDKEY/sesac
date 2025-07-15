import userRepository from "../repository/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginParams, SignUpParams } from "../types/user";

class AuthService {
  async signUp({
    email,
    password,
    nickname,
  }: SignUpParams): Promise<{ userId: number }> {
    const existingUser = await userRepository.findUserByEmail(email);
    console.log(email, password, nickname);

    if (existingUser) {
      throw new Error("ExistEmail");
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await userRepository.createUser(
      email,
      bcryptPassword,
      nickname
    );

    console.log(newUser);

    return { userId: newUser.userId };
  }

  async login({ email, password }: LoginParams): Promise<string> {
    const existingUser = await userRepository.findUserByEmail(email);
    const SECRET_KEY = process.env.SECRET_KEY;

    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined");
    }

    if (!existingUser) {
      throw new Error("UserNotFound");
    }

    const verifyPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!verifyPassword) {
      throw new Error("PasswordError");
    }

    const token = jwt.sign({ userId: existingUser.userId }, SECRET_KEY, {
      expiresIn: "12h",
    });

    return token;
  }
}

export default new AuthService();
