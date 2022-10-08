import { AppBar, Box, Container, styled, Typography } from "@mui/material";
import usePhotos from "data/usePhotos";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Grid = styled(Box)`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 12px;
`;

const Vault: NextPage = () => {
  const { photos } = usePhotos();

  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h2" component="h1" align="center">
          Feed
        </Typography>
      </AppBar>
      <Container>
        <Head>
          <title>Vault</title>
        </Head>
        <Grid>
          {photos?.map((photo, i) => (
            <Box key={photo.id}>
              <Image
                priority={i < 20}
                alt={photo.title}
                src={photo.thumbnailUrl + ".png"} // via.placeholder.com api issue
                width={100}
                height={100}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Vault;
