const prisma = require("../utils/prisma/index");
const express = require("express");
const authenticateToken = require("../middleware/authentication-middleware");
const {
  handleValidationResult,
  getPostsValidator,
  postsValidator,
  putPostsValidator,
} = require("../middleware/validation-result-handler");
const { checkPostOwner } = require("../middleware/authorization-middleware");
const postController = require("../controllers/post.controller");

const router = express.Router();

router
  .route("/posts")
  .get(postController.findAllPosts)
  // 전체 게시글 조회(누구나/ 작성자 정보도 같이 보냄)
  // .get(async (req, res, next) => {
  //   try {
  //     const posts = await prisma.Post.findMany({
  //       // join
  //       include: {
  //         User: {
  //           select: {
  //             userId: true,
  //             nickname: true,
  //           },
  //         },
  //       },
  //       orderBy: {
  //         createdAt: "desc",
  //       },
  //     });

  //     return res.status(200).json({ data: posts });
  //   } catch (e) {
  //     console.log(e);

  //     return next(new Error("DataBaseError"));
  //   }
  // })
  // 게시글 작성(로그인된 사람만)
  // .post(
  //   authenticateToken,
  //   postsValidator,
  //   handleValidationResult,
  //   async (req, res, next) => {
  //     const { title, content } = req.body;
  //     const userId = req.user;
  //     try {
  //       const post = await prisma.Post.create({
  //         data: {
  //           userId,
  //           title,
  //           content,
  //         },
  //       });
  //       return res.status(200).json({
  //         post,
  //       });
  //     } catch (e) {
  //       return next(new Error("DataBaseError"));
  //     }
  //   }
  // );
  .post(
    authenticateToken,
    postsValidator,
    handleValidationResult,
    postController.createPost
  );

router
  .route("/posts/:postId")
  // 특정 게시글 조회(누구나)
  // .get(getPostsValidator, handleValidationResult, async (req, res, next) => {
  //   const { postId } = req.params;
  //   try {
  //     const post = await prisma.Post.findUnique({
  //       where: {
  //         postId: +postId,
  //       },
  //       include: {
  //         User: {
  //           select: {
  //             userId: true,
  //             nickname: true,
  //           },
  //         },
  //       },
  //     });

  //     if (!post) {
  //       return next(new Error("PostNotFound"));
  //     }

  //     return res.status(200).json({
  //       data: post,
  //     });
  //   } catch (e) {
  //     console.log(e);

  //     return next(new Error("DataBaseError"));
  //   }
  // })
  .get(getPostsValidator, handleValidationResult, postController.findPostById)
  // 게시글 수정(작성자)
  // .put(
  //   authenticateToken,
  //   putPostsValidator,
  //   handleValidationResult,
  //   checkPostOwner,
  //   async (req, res, next) => {
  //     const { postId } = req.params;
  //     const { title, content } = req.body;
  //     try {
  //       const updatePost = await prisma.Post.findUnique({
  //         where: {
  //           postId: +postId,
  //         },
  //       });

  //       if (!updatePost) {
  //         return next(new Error("PostNotFound"));
  //       }

  //       await prisma.Post.update({
  //         where: { postId: +postId },
  //         data: {
  //           title,
  //           content,
  //           updatedAt: new Date(),
  //         },
  //       });

  //       return res.status(200).json({
  //         message: "게시글 수정 완료",
  //         data: updatePost,
  //       });
  //     } catch (e) {
  //       return next(new Error("DataBaseError"));
  //     }
  //   }
  // )
  .put(
    authenticateToken,
    putPostsValidator,
    handleValidationResult,
    checkPostOwner,
    postController.updatePost
  )
  // 게시글 삭제(작성자)
  // .delete(
  //   authenticateToken,
  //   getPostsValidator,
  //   handleValidationResult,
  //   checkPostOwner,
  //   async (req, res, next) => {
  //     const { postId } = req.params;
  //     try {
  //       const post = await prisma.Post.findUnique({
  //         where: {
  //           postId: +postId,
  //         },
  //       });

  //       if (!post) {
  //         return next(new Error("PostNotFound"));
  //       }

  //       await prisma.Post.delete({
  //         where: { postId: +postId },
  //       });

  //       return res.status(200).json({
  //         message: "게시글 삭제 완료",
  //       });
  //     } catch (e) {
  //       return next(new Error("DataBaseError"));
  //     }
  //   }
  // );
  .delete(
    authenticateToken,
    getPostsValidator,
    handleValidationResult,
    checkPostOwner,
    postController.deletePost
  );

module.exports = router;
