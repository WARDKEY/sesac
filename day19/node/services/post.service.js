const postRepository = require("../repository/post.repository");

class PostService {
  async createPosts({ title, content, userId }) {
    return await postRepository.createPost({ title, content, userId });
  }

  async findAllPosts() {
    return await postRepository.findAllPosts();
  }

  async findPostById({ postId }) {
    return await postRepository.findPostById(postId);
  }

  async updatePost({ postId, title, content }) {
    const post = await postRepository.findPostById(postId);

    if (!post) {
      throw new Error("PostNotFound");
    }

    const updatePost = await postRepository.updatePost({
      postId,
      title,
      content,
    });
    return updatePost;
  }

  async deletePost(postId) {
    const post = await postRepository.findPostById(postId);
    if (!post) {
      throw new Error("PostNotFound");
    }

    await postRepository.deletePost(postId);
  }
}

module.exports = new PostService();
