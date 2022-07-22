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
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { Instagram as InstagramIcon } from "react-feather";

interface PageProps {}
const { mouseControl } = require("./basic.css");

const useStyles = makeStyles((theme: any) => ({
  root: {},
  image: {
    maxWidth: "50%",
    height: "auto",
  },
  imageBig: {
    maxWidth: "100%",
  },
  portrait: {
    width: "100%",
    height: "20rem",
  },
  instagram: {
    color: theme.palette.text.secondary,
  },
  burger: {
    height: "10rem",
    width: "10rem",
    display: "inline-block",
    position: "relative",
    transform: "translateY(50%)",
  },
}));

const Page: FC<PageProps> = ({}) => {
  const classes = useStyles();

  const position = [51.505, -0.09];

  return (
    <Box>
      <Container>
        <Box textAlign={"center"} alignContent={"center"}>
          <Hidden mdUp>
            <Box>
              <Box>
                <img
                  src={require("./logo.png")}
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
                  src={require("./logo.png")}
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
              <Link href="/comida">
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
                  >
                    <Box>
                      <img
                        className={classes.burger}
                        src={require("./burger.png")}
                      ></img>
                    </Box>
                  </Box>
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
                >
                  <Box>
                    <img
                      className={classes.burger}
                      src={require("./wine.png")}
                    ></img>
                  </Box>
                </Box>
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
                  center={{ lat: 41.236111, lng: 1.814321 }}
                  zoom={40}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[41.236111, 1.814321]}></Marker>
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
                      Playa de Sant Sebastia
                    </Typography>
                    <Typography variant={"h5"} color="textSecondary">
                      Sitges
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
      <Box textAlign="center">
        <Stack>
          <Typography sx={{ fontSize: "0.5em" }} color="textSecondary">
            Powered by sergimartinezrodriguez@gmail.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
