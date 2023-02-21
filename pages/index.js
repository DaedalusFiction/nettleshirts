import { Box, Fade, Grid, Typography } from "@mui/material";
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
                <Grid container columnSpacing={4} rowSpacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            Nettle Shirts Puppet Works
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <ImageFadeIn
                                height={1462}
                                width={2000}
                                src={"/images/nettleHero.webp"}
                                alt={"shadow puppet flowers"}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
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
                                <br />
                                <Typography>
                                    This would be a good place to tell people
                                    more about what you do, what people can
                                    expect when they attend an event, where you
                                    are located, a bit about your history, when
                                    you were founded, who you collaborate with,
                                    stuff like that. If you were so inclined.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}
