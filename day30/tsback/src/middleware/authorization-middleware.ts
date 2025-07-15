import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma/prisma";

// req.user 확장을 위한 인터페이스
interface AuthenticatedRequest extends Request {
  user?: string; // req.user의 타입이 string임을 기억해주세요.
}

// 게시글 작성자 확인 미들웨어
const checkPostOwner = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const { postId } = req.params;
  const userId = req.user; // userId는 현재 string | undefined 타입입니다.

  if (!userId) {
    return next(new Error("Forbidden"));
  }

  // userId를 숫자로 변환합니다.
  // 만약 userId가 유효한 숫자가 아닐 경우를 대비하여 에러 처리를 추가하는 것이 좋습니다.
  const numericUserId = Number(userId);

  // userId가 유효한 숫자로 변환되지 않았다면 (예: NaN) 오류 처리
  if (isNaN(numericUserId)) {
    return next(new Error("InvalidUserId")); // 또는 'Forbidden' 등 적절한 오류
  }

  const post = await prisma.post.findUnique({
    where: {
      postId: Number(postId), // postId는 이미 req.params에서 string으로 오므로 Number로 변환
    },
  });

  if (!post) {
    return next(new Error("PostNotFound"));
  }

  // 여기서 post.userId (number)와 numericUserId (number)를 비교합니다.
  if (post.userId !== numericUserId) {
    return next(new Error("Forbidden"));
  }

  console.log("게시글 작성자 확인 완료");

  res.locals.post = post;
  next();
};

export default checkPostOwner;
