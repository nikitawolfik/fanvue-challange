import {
  AppBar,
  Box,
  Button,
  Container,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import usePhotos from "data/usePhotos";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Grid = styled(Box)`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 12px;
`;

const StyledModal = styled(Modal)`
  display: flex;
`;

const ModalContent = styled(Box)`
  position: relative;
  max-width: 600px;
  max-height: 600px;
  margin: auto;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const Vault: NextPage = () => {
  const { photos } = usePhotos();
  const [open, setOpen] = useState(false);
  const [highlightedImage, setHighlightedImage] = useState({
    src: "",
    alt: "image",
  });

  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h2" component="h1" align="center">
          Vault
        </Typography>
      </AppBar>
      <Container>
        <Head>
          <title>Vault</title>
        </Head>
        <StyledModal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalContent>
            <CloseButton variant="outlined" onClick={() => setOpen(false)}>
              Close
            </CloseButton>
            <Image
              src={highlightedImage.src}
              alt={highlightedImage.alt}
              width={600}
              height={600}
            />
          </ModalContent>
        </StyledModal>
        <Grid>
          {photos?.map((photo, i) => (
            <Button
              onClick={() => {
                setHighlightedImage({
                  src: `${photo.url}.png`,
                  alt: photo.title,
                });
                setOpen(true);
              }}
              key={photo.id}
            >
              <Image
                priority={i < 20}
                alt={photo.title}
                src={photo.thumbnailUrl + ".png"} // via.placeholder.com api issue
                width={100}
                height={100}
              />
            </Button>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Vault;
