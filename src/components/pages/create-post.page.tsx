import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useCreatePost } from "../hooks/usePostQuery";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { mutate: AddPost } = useCreatePost()

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFn: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFn(e.target.value);
  };

  const onCreatePost = () => {
      const post = { title, body , userId: 1}
      AddPost(post)
  }

  console.log({ title, body })
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
    </div>
  );
};

export default CreatePostPage;
