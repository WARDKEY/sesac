import { Request, Response, NextFunction } from "express";
import authService from "../services/user.service";

class AuthController {
  async signUp(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { email, password, nickname } = req.body;

    try {
      const newUser = await authService.signUp({ email, password, nickname });
      return res.status(201).json({
        message: "회원가입 완료",
        newUser,
      });
    } catch (e) {
      next(e);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { email, password } = req.body;

    try {
      const token = await authService.login({ email, password });
      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
