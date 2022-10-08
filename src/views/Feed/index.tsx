import {
  AppBar,
  Card,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import usePosts from "data/usePosts";
import PostItem from "./components/PostItem";

const StyledStack = styled(Stack)`
  margin-top: 24px;
`;

const Feed: NextPage = () => {
  const { posts } = usePosts();

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
