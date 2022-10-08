import useSWR from "swr";
import { Post } from "types/posts";

export default function usePosts(initialPosts: Post[]) {
  const { data, error, ...rest } = useSWR<Post[]>("posts", {
    fallbackData: initialPosts,
  });

  return {
    error,
    posts: data,
    isFetching: !data && !error,
    ...rest,
  };
}
