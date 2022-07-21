import React, { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { MapContainer, TileLayer, useMap } from "react-leaflet";


import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ComidasProps {}
const { mouseControl } = require("./basic.css");

const useStyles = makeStyles((theme: any) => ({
  root: {},
}));

const Comidas: FC<ComidasProps> = ({}) => {
  const classes = useStyles();
  const [file, setFile] = useState("./menu.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Link href="/menu2.pdf" target="_blank">
        <Box height={"100vh"}>
          <Box
            sx={{
              height: "20rem",
              width: "20rem",
              backgroundColor: "#AD8344",
              borderRadius: "50%",
              display: "inline-block",
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
    

            <Typography
              variant={"h4"}
              sx={{
                color: "white",
                position: "relative",
                top: "50%",
                transform: "translateY(-200%)",
              }}
            >
              Descargar carta
            </Typography>
          </Box>
        </Box>
      </Link>
    </Container>
  );
};

export default Comidas;
