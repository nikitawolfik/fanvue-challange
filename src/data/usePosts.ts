import useSWR from "swr";
import { Post } from "types/posts";

export default function usePosts() {
  const { data, error, ...rest } = useSWR<Post[]>("posts");

  return {
    error,
    posts: data,
    isFetching: !data && !error,
    ...rest,
  };
}
