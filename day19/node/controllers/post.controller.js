const postService = require("../services/post.service.js");

class PostController {
  // 게시글 작성
  async createPost(req, res, next) {
    const { title, content } = req.body;
    const userId = req.user;
    try {
      const newPost = await postService.createPosts({ title, content, userId });
      return res.status(200).json({ data: newPost });
    } catch (e) {
      next(new Error("DataBaseError"));
    }
  }

  // 전체 게시글 조회
  async findAllPosts(req, res, next) {
    try {
      const posts = await postService.findAllPosts();
      return res.status(200).json({ data: posts });
    } catch (e) {
      next(new Error("DataBaseError"));
    }
  }

  // 특정 게시글 조회
  async findPostById(req, res, next) {
    const { postId } = req.params;
    try {
      // 형변환은 컨트롤러에서
      const post = await postService.findPostById(+postId);

      if (!post) {
        return next(new Error("PostNotFound"));
      }

      return res.status(200).json({
        data: post,
      });
    } catch (e) {
      next(e);
    }
  }

  // 게시글 수정
  async updatePost(req, res, next) {
    const { postId } = req.params;
    const { title, content } = req.body;
    try {
      const updatePost = await postService.updatePost({
        postId,
        title,
        content,
      });

      return res.status(200).json({
        message: "게시글 수정 완료",
        data: updatePost,
      });
    } catch (e) {
      next(e);
    }
  }

  // 게시글 삭제
  async deletePost(req, res, next) {
    const { postId } = req.params;
    try {
      await postService.deletePost(+postId);
      return res.status(200).json({
        message: "게시글 삭제 완료",
      });
    } catch (e) {
      next(e || new Error("DataBaseError"));
    }
  }
}

module.exports = new PostController();
