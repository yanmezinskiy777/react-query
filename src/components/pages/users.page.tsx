import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUserData } from "./types";

const UserPage = () => {
  const [users, setUsers] = useState<IUserData[] | undefined>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      try{
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(result.data);
      } catch(err: any){
        console.dir(err);
        setLoading(false);
        setError(err.message);
      }
    };
    getUsers();
    setLoading(false);
  }, []);

  
  if(error){
    return <h1>{error}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Typography variant="h1">Users Page</Typography>
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default UserPage;
