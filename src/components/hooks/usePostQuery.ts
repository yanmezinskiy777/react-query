import axios from "axios";
import { IPost } from "../pages/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../api/axios";

const fetchData = ({ queryKey }: any) => {
  return axios.get<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${queryKey[1]}`
  );
};

const onCreatePostHandle = (post: IPost) => {
  return request({ url: "/posts", body: post, method: "post"});
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
    // onSuccess: (data) => {
    //   queryClient.setQueryData("query-blog", (oldData: any) => {
    //     return{
    //       ...oldData.data,
    //       data: [...oldData.data, data.data]
    //     }
    //   })
    // },
    onMutate: async (newPost) => {
      await queryClient.cancelQueries();
      const prevData = queryClient.getQueryData("query-blog");
      queryClient.setQueriesData("query-blog", (oldData: any) => {
        return {
          ...oldData,
          data: [...oldData.data, { id: oldData.data.length + 1, ...newPost }],
        };
      });
      return {
        prevData,
      };
    },
    onError: (_error, _post, context: any) => {
      queryClient.setQueriesData("query-blog", context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("query-blog");
    },
  });
};
