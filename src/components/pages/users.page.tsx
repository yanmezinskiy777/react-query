import axios from 'axios';
import { useEffect, useState } from 'react'
import { IUserData } from './types';

const UserPage = () => {
  const [users, setUsers] = useState<IUserData[] | undefined>([]);
  const [isLoading, setLoading] = useState<boolean>(true)
  useEffect(() => {
      const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data);
      }
      getUsers();
      setLoading(false);
     
  }, [])

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div>{users && users.map(user => <div key={user.id}>{user.name}</div>)}</div>
  )
}

export default UserPage