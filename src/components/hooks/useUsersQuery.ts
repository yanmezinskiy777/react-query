import axios from "axios";
import { IUserData } from "../pages/types";
import { useQuery } from "react-query";

const fetchUsers = () => {
  return axios.get<IUserData[]>("https://jsonplaceholder.typicode.com/users");
};

interface IUseQueryHook {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}

export const useUserQuery = ({ onSuccess, onError }: IUseQueryHook) => {
  return useQuery("query-users", fetchUsers, {
    enabled: false,
    onSuccess,
    onError,
    select: (data) => data.data.map((user) => user.username),
  });
};
