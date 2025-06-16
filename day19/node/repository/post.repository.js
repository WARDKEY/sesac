const prisma = require("../utils/prisma/index.js");

class PostRepository {
  async createPost({ title, content, userId }) {
    return await prisma.Post.create({
      data: {
        userId,
        title,
        content,
      },
    });
  }

  async findAllPosts() {
    const posts = await prisma.Post.findMany({
      // join
      include: {
        User: {
          select: {
            userId: true,
            nickname: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  }

  async findPostById({ postId }) {
    return await prisma.Post.findUnique({
      where: {
        postId: postId,
      },
      include: {
        User: {
          select: {
            userId: true,
            nickname: true,
          },
        },
      },
    });
  }

  async updatePost({ postId, title, content }) {
    return await prisma.Post.update({
      where: { postId: postId },
      data: {
        title,
        content,
        updatedAt: new Date(),
      },
    });
  }

  async deletePost(postId) {
    await prisma.Post.delete({
      where: { postId: postId },
    });
  }
}

module.exports = new PostRepository();
