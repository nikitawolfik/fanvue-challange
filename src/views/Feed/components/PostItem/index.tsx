import {
  Button,
  Card,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import usePostComments from "data/usePostComments";
import React from "react";
import { Post } from "types/posts";

interface Props {
  post: Post;
}

const StyledCard = styled(Card)`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 600px;
  padding: 16px;
`;

const StyledDivider = styled(Divider)`
  margin: 16px 0;
`;

const PostItem = ({ post }: Props) => {
  const { comments } = usePostComments(post.id);
  const [commentsShown, setCommentsShown] = React.useState(false);

  return (
    <StyledCard>
      <Typography variant="h5" component="p">
        {post.title}
      </Typography>
      <Typography variant="body1" component="span">
        {post.body}
      </Typography>
      <Button
        disabled={!comments?.length}
        onClick={() => setCommentsShown((prev) => !prev)}
      >
        {comments?.length ? `${comments.length} comments` : "No comments"}
      </Button>
      {commentsShown && (
        <Stack direction="column">
          <StyledDivider />
          {comments?.map((comment) => (
            <Box key={comment.id} border="1px" marginY={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold" variant="caption">
                  {comment.name}
                </Typography>
                <Typography fontWeight="bold" variant="caption">
                  {comment.email}
                </Typography>
              </Stack>
              <Typography variant="body2">{comment.body}</Typography>
            </Box>
          ))}
        </Stack>
      )}
    </StyledCard>
  );
};

export default PostItem;
