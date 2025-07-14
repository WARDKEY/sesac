// PostItem 컴포넌트입니다.

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};
