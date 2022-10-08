import {
  AppBar,
  Card,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import usePosts from "data/usePosts";
import PostItem from "./components/PostItem";
import { Post } from "types/posts";

const StyledStack = styled(Stack)`
  margin-top: 24px;
`;

interface Props {
  initialPosts: Post[];
}

const Feed: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  initialPosts,
}: Props) => {
  const { posts } = usePosts(initialPosts);

  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h2" component="h1" align="center">
          Feed
        </Typography>
      </AppBar>
      <Container>
        <Head>
          <title>Feed</title>
        </Head>
        <StyledStack direction="column" spacing={2} alignItems="center">
          {posts?.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </StyledStack>
      </Container>
    </>
  );
};

export default Feed;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com//posts");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};
