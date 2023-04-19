import { Favorite, StarBorder } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import ImageFadeIn from "../../components/general/ImageFadeIn";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import Stripes from "../../components/layout/Stripes";
import { about, greek, menus } from "../../siteInfo";

const index = () => {
    return (
        <Container sx={{ padding: "8rem 0" }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ImageFadeIn
                                alt={about.imageOne.alt}
                                src={about.imageOne.url}
                                height={1333}
                                width={2000}
                                maxSize={2000}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            height: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
                            About Miranda
                        </Typography>
                        <Typography sx={{ maxWidth: "75ch" }}>
                            Based in Charlottesville, Virginia, Nettle Shirts
                            Puppet Works is the puppetry work of Miranda
                            Elliott-Rader and the friends and community members
                            she gets to help her. Most shows are designed for
                            people with longish attention spans but are
                            appropriate for any age.
                        </Typography>
                        <Typography sx={{ maxWidth: "75ch" }}>
                            Miranda creates in a variety of puppetry styles
                            including shadow puppets, luminaries, paper maché,
                            and found objects. She often tells stories about
                            interaction with the natural world, mystic religious
                            experience, and other ways of merging with the
                            divine. She is particularly interested in
                            experiences that are necessarily analog and cannot
                            be recorded.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default index;
