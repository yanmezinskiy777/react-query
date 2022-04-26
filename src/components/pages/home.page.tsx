import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserQuery } from "../hooks/useUsersQuery";
import { IUserData } from "./types";

type TUser = Partial<IUserData>;

const HomePage = () => {
  const onSuccess = (data: any) => {
    console.log("Success fetching data");
    console.log(data);
  };

  const onError = (error: any) => {
    console.dir("Error fetching");
    console.dir(error);
  };

  const { isError, isLoading, data, status, isFetching, refetch } =
    useUserQuery({ onSuccess, onError });
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
      <ul>
        {data?.map(({ id, username }: TUser) => (
          <li key={id}>
            <Link to={`/user/${id}`}>
              {username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
