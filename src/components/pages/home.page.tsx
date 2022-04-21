import axios from "axios";
import { useQuery } from "react-query";
import { IUserData } from "./types";

const fetchUsers = () => {
  return axios.get<IUserData[]>("https://jsonplaceholder.typicode.com/users");
};

const HomePage = () => {
  const { data, isLoading } = useQuery(
    "query-users",
    fetchUsers
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.data.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default HomePage;
