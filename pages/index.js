import { Box, Divider, Fade, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import ImageFadeIn from "../components/general/ImageFadeIn";

import Meta from "../components/home/Meta";

export default function Home() {
    return (
        <Container maxWidth="xl">
            <Meta />
            <Container maxWidth="md" sx={{ padding: "10vh 0" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h1" sx={{ textAlign: "center" }}>
                            Nettle Shirts Puppet Works
                        </Typography>
                        <br />
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            Abstract Landscape Puppetry
                        </Typography>
                        {/* <Divider sx={{ margin: "1rem auto", width: "15rem" }} /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="sm">
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <ImageFadeIn
                                    height={1462}
                                    width={2000}
                                    maxSize={1000}
                                    src={"/images/nettleHero.webp"}
                                    alt={"shadow puppet flowers"}
                                />
                            </Box>
                        </Container>
                    </Grid>
                    {/* <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography variant="h2">
                                    Abstract Landscape Puppetry
                                </Typography>
                                <Divider
                                    sx={{ margin: "1rem 0", maxWidth: "25rem" }}
                                />

                                <Typography>
                                    This would be a good place to tell people
                                    more about what you do, what people can
                                    expect when they attend an event, where you
                                    are located, a bit about your history, when
                                    you were founded, who you collaborate with,
                                    stuff like that. If you were so inclined.
                                </Typography>
                                <br />
                                <Typography>
                                    For a more vertical image like the one to
                                    the left, additional paragraphs would look
                                    best. I can switch the image back to a more
                                    horizontal one, just let me know, but I
                                    think this one looks quite nice.
                                </Typography>
                                <br />
                                <Typography>
                                    In the final paragraph you can write
                                    something about what people can get in
                                    contact with you about, booking shows or
                                    collaboration or whatever.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        </Container>
    );
}
