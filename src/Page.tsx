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

import { Instagram as InstagramIcon } from "react-feather";

interface PageProps {}
const { mouseControl } = require("./basic.css");

const useStyles = makeStyles((theme: any) => ({
  root: {},
  image: {
    maxWidth: "30%",
    height: "auto",
  },
  imageBig: {
    maxWidth: "100%",
    height: "auto",
  },
  portrait: {
    width: "100%",
    height: "20rem",
  },
  instagram: {
    color: theme.palette.text.secondary,
  },
}));

const Page: FC<PageProps> = ({}) => {
  const classes = useStyles();

  const position = [51.505, -0.09];

  return (
    <Container>
      <Box textAlign={"center"} alignContent={"center"}>
        <Hidden mdUp>
          <Box>
            <Box>
              <img
                src={require("./logonegre.png")}
                className={classes.imageBig}
              ></img>
            </Box>
            <Box></Box>
          </Box>
        </Hidden>
        <Hidden mdDown>
          <Box>
            <Box>
              <img
                src={require("./logonegre.png")}
                className={classes.image}
              ></img>
            </Box>
            <Box>
              <img
                src={require("./portrait.jpg")}
                className={classes.portrait}
              ></img>
            </Box>
          </Box>
        </Hidden>
        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item sm={12} md={6} xs={12} lg={6}>
            <Link href="/comidas">
              <Box height="20rem">
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
                ></Box>
              </Box>
            </Link>
          </Grid>
          <Grid item sm={12} md={6} xs={12} lg={6}>
            <Box height="20rem">
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
              ></Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container width={"100%"}>
          <Grid item textAlign="left" md={6}>
            <Box
              position="relative"
              top="50%"
              sx={{ transform: "translateY(-50%)" }}
              padding={5}
            >
              <Typography color="textSecondary" variant={"h5"}>
                Escríbenos
              </Typography>
              <Typography color="textPrimary" variant={"h3"}>
                Te estamos esperando
              </Typography>
              <Typography color="textSecondary" variant={"h6"}>
                info@chiringuitocaracola.com
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <Box>
              <MapContainer
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Box>
          </Grid>

          <Grid container spacing={4} alignItems="center" padding={5}>
            <Grid item sm={12} md={4} xs={12} lg={4}>
              <Box display="flex" flexDirection="column" gap={3}>
                <Typography variant={"h3"} color="textPrimary">
                  Encuéntranos
                </Typography>
                <Box gap={1} display="flex" flexDirection="column">
                  <Typography variant={"h5"} color="textSecondary">
                    77218 Herta Highway
                  </Typography>
                  <Typography variant={"h5"} color="textSecondary">
                    Suite 984
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={4} xs={12} lg={4}>
              <Box display="flex" flexDirection="column" gap={3}>
                <Typography variant={"h3"} color="textPrimary">
                  Horario
                </Typography>
                <Typography variant={"h5"} color="textSecondary">
                  9.00 a 21.00
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4} xs={12} lg={4}>
              <Box
                display="flex"
                flexDirection="column"
                gap={3}
                alignItems="center"
              >
                <Typography variant={"h3"} color="textPrimary">
                  Contactanos
                </Typography>
                <Link
                  href={"https://www.instagram.com/caracolasitges/"}
                  style={{ textDecoration: "none" }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <InstagramIcon className={classes.instagram} />
                    <Typography variant={"h5"} color="textSecondary">
                      chiringuitocaracola
                    </Typography>
                  </Stack>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Page;
