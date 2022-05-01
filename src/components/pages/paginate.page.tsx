import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const PaginatePage = () => {
  const [curPage, setCurPage] = useState(1);

  const fetchPosts = (page: number) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
  };

  const { data, isFetching } = useQuery(
    ["query-post-page", curPage],
    {
      queryFn: () => fetchPosts(curPage),
    }
  );

  const onPrevPage = () => {
    setCurPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    setCurPage((prev) => prev + 1);
  };

  return (
    <div>
      <ul>
        {data?.data.map((post: any) => (
          <li>{post.title}</li>
        ))}
      </ul>
      <div>
        <Button disabled={curPage === 1} onClick={onPrevPage}>
          prev
        </Button>
        <Button disabled={curPage === 10} onClick={onNextPage}>
          next
        </Button>
      </div>
      <div>{isFetching && <h2>Featching...</h2>}</div>
    </div>
  );
};

export default PaginatePage;
