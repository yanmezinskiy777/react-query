import axios from "axios";
import { useQuery } from "react-query";
import { IComment, IPost } from "./types";

const BlogPage = () => {
  const fetchBlog = () => {
    return axios.get<IPost[]>(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
  };
  const fetchComments = () => {
    return axios.get<IComment[]>(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
  };

  const { data: posts } = useQuery("query-blog", fetchBlog);
  const { data: comments } = useQuery("query-blog", fetchComments);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts &&
          posts.data.map((post: IPost) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments &&
            comments.data.map((comment: IComment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
