import axios from "axios";
import { IUserData } from "../pages/types";
import { useQuery } from "react-query";

const fetchUsers = ({ queryKey }: any) => {
  return axios.get<IUserData>(
    `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
  );
};

interface IUseQueryHook {
  id?: string;
}

export const useProfileUser = ({ id }: IUseQueryHook) => {
  return useQuery(["query-profile", id], fetchUsers, {
    select: (data) => data?.data,
  });
};