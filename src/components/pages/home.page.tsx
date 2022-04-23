import { Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { IUserData } from "./types";

const fetchUsers = () => {
  return axios.get<IUserData[]>("https://jsonplaceholder.typicode.com/users");
};

const HomePage = () => {
  const { isError, isLoading, data, status, isFetching } = useQuery(
    "query-users",
    fetchUsers,
    {
      staleTime: 10000
    }
  );
  console.log(isFetching, isLoading);
  if (isError) {
    return <h1>{status}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Typography variant="h1">Home Page</Typography>
      {data?.data.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default HomePage;
