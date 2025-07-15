import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status?: number; // 필요 시 커스텀 status 코드도 사용할 수 있음
}

const errorHandlingMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error(err.message);

  switch (err.message) {
    case "InputValidation":
    case "PasswordValidation":
      return res
        .status(400)
        .json({ errorMessage: "입력된 요청이 잘못되었습니다." });

    case "ExistEmail":
      return res.status(400).json({ errorMessage: "가입된 이메일 있습니다." });

    case "UserNotFound":
      return res.status(404).json({ errorMessage: "해당 유저가 없습니다." });

    case "PostNotFound":
      return res
        .status(404)
        .json({ errorMessage: "게시물을 찾을 수 없습니다." });

    case "PasswordError":
    case "password":
      return res
        .status(401)
        .json({ errorMessage: "패스워드가 일치하지 않습니다." });

    case "DataBaseError":
      return res
        .status(500)
        .json({ errorMessage: "데이터 베이스에 오류가 있습니다." });

    case "Forbidden":
      return res.status(401).json({ errorMessage: "접근 권한이 없습니다." });

    default:
      return res.status(500).json({ errorMessage: "서버에 오류가 있습니다." });
  }
};

export default errorHandlingMiddleware;
