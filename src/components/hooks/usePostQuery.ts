import axios from "axios";
import { IPost } from "../pages/types";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchData = ({ queryKey }: any) => {
  return axios.get<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${queryKey[1]}`
  );
};

const onCreatePostHandle = (post: IPost) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", post);
};

interface IUseQueryHook {
  id?: string;
}

export const usePostQuery = ({ id }: IUseQueryHook) => {
  return useQuery(["query-post", id], fetchData, {
    select: (data) => data?.data,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(onCreatePostHandle, {
    onSuccess: () => {
      queryClient.invalidateQueries("query-post")
    }
  });
};
