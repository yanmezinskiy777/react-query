import React from "react";
import { useParams } from "react-router-dom";
import { useProfileUser } from "../hooks/useProfileUser";

const ProfilePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProfileUser({ id });
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return <h2>{ data?.username }</h2>;
};

export default ProfilePage;
