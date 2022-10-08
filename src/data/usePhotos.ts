import useSWR from "swr";
import { Photo } from "types/photos";

export default function usePhotos() {
  const { data, error, ...rest } = useSWR<Photo[]>("photos");

  return {
    error,
    photos: data ? data.slice(0, 100) : [],
    isFetching: !data && !error,
    ...rest,
  };
}
