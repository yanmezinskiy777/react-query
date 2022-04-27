import { FC } from "react";
import { usePostQuery } from "../hooks/usePostQuery";

interface OwnProps {
    postsId: number[]
}

const ProfilePage: FC<OwnProps> = ({ postsId }) => {
  const { data, isLoading } = usePostQuery({ id: String(postsId[0]) });
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return <h2>{ data?.title }</h2>;
};

export default ProfilePage;
