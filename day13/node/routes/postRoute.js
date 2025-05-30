const express = require("express");

// 라우터 함수 호출
const router = express.Router();

// 실습2 데이터
const posts = require("./../public/posts");

router
  .route("/")
  // 전체 게시글 조회
  .get((req, res) => {
    res.send(posts);
  })
  // 새 게시글 작성
  .post((req, res) => {
    res.send({
      id: posts.length + 1,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
    });
    posts.push({
      id: posts.length + 1,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
    });
  });

router
  .route("/:id")
  // 특정 게시글 조회
  .get((req, res) => {
    res.send(posts[req.params.id - 1]);
  })
  // 게시글 수정
  .put((req, res) => {
    for (let post of posts) {
      if (post.id === Number(req.params.id)) {
        res.send({
          id: req.params.id,
          userId: post.userId,
          title: req.body.title,
          content: req.body.content,
          createdAt: new Date(),
        });
        post.title = req.body.title;
        post.content = req.body.content;
      }
    }
  })
  // 게시글 삭제
  .delete((req, res) => {
    let index = 0;
    let bool = false;
    for (post of posts) {
      if (post.id === Number(req.params.id)) {
        posts.splice(index, 1);
        res.send({
          message: "게시글이 성공적으로 삭제되었습니다.",
        });
        bool = true;
      }
      index++;
    }
    if (!bool) {
      res.send({
        error: "해당 게시글을 찾을 수 없습니다.",
      });
    }
  });

module.exports = router;
