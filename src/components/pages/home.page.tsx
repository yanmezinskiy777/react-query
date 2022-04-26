import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useUserQuery } from "../hooks/useUsersQuery";

//type TUser = Partial<IUserData>;

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
      {/* {data?.data.map((user: TUser) => (
        <div key={user.id}>{user.username}</div>
      ))} */}
      {data?.map((user) => (
        <h5 key={user}>{user}</h5>
      ))}
    </div>
  );
};

export default HomePage;
