import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

dotenv.config();

// SECRET_KEY가 undefined가 아님을 TypeScript에게 명시적으로 알려줍니다.
const SECRET_KEY = process.env.SECRET_KEY!;

if (!SECRET_KEY) {
  // 이 에러는 SECRET_KEY가 실제로 설정되지 않았을 때만 발생합니다.
  throw new Error("SECRET_KEY is not defined in environment variables");
}

// 사용자 인증 미들웨어
const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  const verifiedToken = verifyToken(token);

  if (!verifiedToken) {
    return next(new Error("Forbidden"));
  }

  // 타입 확장 필요: req.user
  (req as AuthenticatedRequest).user = verifiedToken.userId;
  res.locals.user = verifiedToken.userId;

  next();
};

// JWT 토큰 검증
function verifyToken(
  token?: string
): (JwtPayload & { userId: string }) | false {
  try {
    // token!은 token이 undefined가 아님을 확신 (authHeader?.split(' ')[1]에서 undefined가 나올 수 있음)
    // SECRET_KEY는 위에서 !로 이미 string으로 단언됨
    return jwt.verify(token!, SECRET_KEY) as unknown as JwtPayload & {
      userId: string;
    };
  } catch (e) {
    // 토큰이 유효하지 않거나 검증에 실패한 경우
    return false;
  }
}

// 타입 확장: req.user 사용을 위한 커스텀 타입
interface AuthenticatedRequest extends Request {
  user?: string;
}

export default authMiddleware;
