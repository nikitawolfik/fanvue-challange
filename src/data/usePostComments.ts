import useSWR from "swr";
import { Comment } from "types/posts";

export default function usePostComments(postId: number) {
  const { data, error, ...rest } = useSWR<Comment[]>(
    `posts/${postId}/comments`
  );

  return {
    error,
    comments: data,
    isFetching: !data && !error,
    ...rest,
  };
}
