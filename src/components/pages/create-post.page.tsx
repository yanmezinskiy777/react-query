import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useCreatePost } from "../hooks/usePostQuery";
import { IPost } from "./types";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { mutate: AddPost } = useCreatePost();

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFn: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFn(e.target.value);
  };

  const onCreatePost = () => {
    const post = { title, body, userId: 1 };
    AddPost(post);
  };

  const fetchBlog = () => {
    return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  };

  const { data: posts } = useQuery("query-blog", fetchBlog);

  return (
    <div>
      <FormGroup style={{ maxWidth: "40%" }}>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            name="title"
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e, setTitle)
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="body">Body</InputLabel>
          <Input
            name="body"
            type="text"
            value={body}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e, setBody)
            }
          />
        </FormControl>
        <Button onClick={onCreatePost}>Create Post</Button>
      </FormGroup>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts &&
            posts.data.map((post: IPost) => (
              <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatePostPage;
