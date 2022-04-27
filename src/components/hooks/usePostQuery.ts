import axios from "axios";
import { IPost } from "../pages/types";
import { useQuery } from "react-query";

const fetchData = ({ queryKey }: any) => {
  return axios.get<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${queryKey[1]}`
  );
};

interface IUseQueryHook {
  id?: string;
}

export const usePostQuery = ({ id }: IUseQueryHook) => {
  return useQuery(["query-post", id], fetchData, {
    select: (data) => data?.data,
  });
};
