import { Button } from "@mui/material";
import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const PaginatePage = () => {
  const fetchPosts = ({ pageParam = 1 }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
    );
  };

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["query-post-page"],
    fetchPosts,
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 10) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  return (
    <div>
      <ul>
        {data?.pages.map((group: any, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((post: any) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </Fragment>
          );
        })}
      </ul>
      <div>
        <Button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          load more
        </Button>
      </div>
      <div>{isFetching && <h2>Featching...</h2>}</div>
    </div>
  );
};

export default PaginatePage;
