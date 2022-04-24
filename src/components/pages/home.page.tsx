import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { IUserData } from "./types";

type TUser = Partial<IUserData>;

const fetchUsers = () => {
  return axios.get<IUserData[]>("https://jsonplaceholder.typicode.com/users");
};

const HomePage = () => {
  const onSuccess = (data: any) => {
    console.log("Success fetching data");
    console.log(data);
  };

  const onError = (error: any) => {
    console.dir("Error fetching");
    console.dir(error);
  };

  const { isError, isLoading, data, status, isFetching, refetch } = useQuery(
    "query-users",
    fetchUsers,
    {
      enabled: false,
      onSuccess,
      onError,
    }
  );
  console.log({ isFetching, isLoading });
  if (isError) {
    return <h1>{status}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const getUsers = () => refetch();

  return (
    <div>
      <Typography variant="h1">Home Page</Typography>
      <Button
        onClick={getUsers}
        variant="contained"
        component="button"
        color="primary"
        size="medium"
      >
        Get Users
      </Button>
      {data?.data.map((user: TUser) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default HomePage;
