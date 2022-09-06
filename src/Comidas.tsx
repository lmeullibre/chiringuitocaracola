import React, { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Hidden,
  IconButton,
  Link,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";

import {
  Instagram as InstagramIcon,
  Download as DownloadIcon,
  ArrowLeft as ArrowLeft,
} from "react-feather";

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
  const navigate = useNavigate();
  const [pageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box display="flex" flexDirection="column">
        <IconButton onClick={() => navigate("/")}>
          <ArrowLeft></ArrowLeft>
        </IconButton>
          <Card sx={{ boxShadow: 20 }}>
            <img
              src={require("./menu.jpg")}
              style={{ maxWidth: "100%" }}
            ></img>
          </Card>
      </Box>
    </Container>
  );
};

export default Comidas;
