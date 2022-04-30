import axios from "axios";
import { useQuery } from "react-query";

const DependQueryPage = ({ id }: { id: number }) => {
  const fetchPostById = (postId: number) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };
  const fetchUserById = (userId: number) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  };

  const { data: post } = useQuery(["post-query", id], {
    queryFn: () => fetchPostById(id),
  });
  const userFetchedId = post?.data.userId;

  const { data: user } = useQuery(["query-user", userFetchedId], {
    queryFn: () => fetchUserById(userFetchedId),
    enabled: !!userFetchedId,
  });

  return (
    <>
      <div>DependQueryPage</div>
      <h1>{user?.data.name}</h1>
    </>
  );
};

export default DependQueryPage;
