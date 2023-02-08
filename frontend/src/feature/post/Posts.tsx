import Post from "./Post";
import { Post as PostType } from "./types";

const Posts = ({ posts }: {
  posts: PostType[]
}) => {
  const postElements = posts.map((post) => {
    return (
      <Post key={post.id} post={post} />
    );
  });

  return (
    <>
      <table>
        {postElements}
      </table>
    </>
  )
};

export default Posts;
