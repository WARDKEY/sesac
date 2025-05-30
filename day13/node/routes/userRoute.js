const express = require("express");

// 라우터 함수 호출
const router = express.Router();

// 실습2 데이터
const users = require("./../public/users");
const posts = require("./../public/posts");

router
  .route("/")
  // 사용자 전체 조회
  .get((req, res) => {
    const user = [];
    for (u of users) {
      user.push({
        id: u,
      });
    }
    res.send(user);
  })
  // 사용자 등록
  .post((req, res) => {
    if (users.includes(Number(req.body.id))) {
      return res.send({
        error: "이미 존재하는 사용자입니다.",
      });
    }
    users.push(req.body.id);
    res.send(req.body);
  });

router
  .route("/:id")
  // 사용자 상세 조회
  .get((req, res) => {
    if (users.includes(Number(req.params.id))) {
      return res.send({
        id: req.params.id,
      });
    }
    res.send({
      error: "해당 사용자를 찾을 수 없습니다.",
    });
  })
  // 사용자 삭제
  .delete((req, res) => {
    if (users.includes(Number(req.params.id))) {
      users.splice(users.indexOf(Number(req.params.id)), 1);
      return res.send({
        message: "사용자가 삭제되었습니다.",
      });
    }
    res.send({
      error: "해당 사용자를 찾을 수 없습니다.",
    });
  });

router
  .route("/:id/post")
  // 특정 사용자의 게시글 조회
  .get((req, res) => {
    const userId = Number(req.params.id);
    const inUser = [];
    for (let post of posts) {
      if (post.userId === userId) {
        inUser.push(post);
      }
    }

    if (inUser.length !== 0) {
      return res.send(inUser);
    }
    res.send({
      error: "해당 사용자를 찾을 수 없습니다.",
    });
  });

module.exports = router;
