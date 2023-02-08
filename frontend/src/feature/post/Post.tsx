import { Post } from "./types";


const Post = ({ post }: {
  post: Post
}) => {
  return (
    <>
      <tr>
        <td>ID: {post.id}</td>
        <td>タイトル: {post.title}</td>
        <td>本文: {post.body}</td>
      </tr>
    </>
  );
}

export default Post;
