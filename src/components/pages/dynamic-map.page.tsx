import axios from "axios";
import { FC } from "react";
import { useQueries } from "react-query";

interface OwnProps {
  postIds: number[];
}

const fetchPostById = (id: number) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const DynmaicParallelQuery: FC<OwnProps> = ({ postIds }) => {
  const result = useQueries(
    postIds.map((id) => {
      return {
        queryKey: ["query-post", id],
        queryFn: () => fetchPostById(id),
      };
    })
  );
  console.log(result);
  return <div>DynmaicParallelQuery</div>;
};

export default DynmaicParallelQuery;
