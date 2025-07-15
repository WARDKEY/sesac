// import { Request, Response, NextFunction } from "express";
// import { validationResult } from "express-validator";
// import { param } from "express-validator";
// import { body } from "express-validator";

// // 회원 가입 유효성 체크
// export const signUpValidator = [
//   body("email")
//     .isEmail()
//     .withMessage("이메일 형식이 아닙니다.")
//     .notEmpty()
//     .withMessage("이메일이 없습니다."),

//   body("password")
//     .isLength({ min: 6 })
//     .withMessage("비밀번호가 6자리 이하")
//     .notEmpty()
//     .withMessage("패스워드가 없습니다."),

//   body("nickname").notEmpty().withMessage("닉네임이 없습니다."),
// ];

// // 로그인 유효성 체크
// export const loginValidator = [
//   body("email")
//     .isEmail()
//     .withMessage("이메일 형식이 아닙니다.")
//     .notEmpty()
//     .withMessage("이메일이 없습니다."),

//   body("password")
//     .isLength({ min: 6 })
//     .withMessage("비밀번호가 6자리 이하")
//     .notEmpty()
//     .withMessage("패스워드가 없습니다."),
// ];

// // 게시글 작성 유효성 체크
// export const postsValidator = [
//   body("title").notEmpty().withMessage("제목을 입력해주세요."),
//   body("content").notEmpty().withMessage("내용을 입력해주세요."),
// ];

// // 게시글 조회/삭제 유효성 체크
// export const getPostsValidator = [
//   param("postId")
//     .isInt()
//     .withMessage("id가 숫자여야 합니다.")
//     .notEmpty()
//     .withMessage("postId가 필요합니다."),
// ];

// // 게시글 수정 유효성 체크
// export const putPostsValidator = [
//   param("postId")
//     .isInt()
//     .withMessage("id가 숫자여야 합니다.")
//     .notEmpty()
//     .withMessage("postId가 필요합니다."),

//   body("title").notEmpty().withMessage("제목을 입력해주세요."),
//   body("content").notEmpty().withMessage("내용을 입력해주세요."),
// ];

// // 유효성 검사 결과 처리 미들웨어
// export const handleValidationResult = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void | Response => {
//   const result = validationResult(req).errors;

//   if (result.length !== 0) {
//     const extractError = result.map((err) => err.msg);
//     console.warn("Validation failed:", extractError);
//     return next(new Error("InputValidation"));
//   }

//   next();
// };
