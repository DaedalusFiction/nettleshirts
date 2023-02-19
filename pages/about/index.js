import { Favorite, StarBorder } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import Stripes from "../../components/layout/Stripes";
import { about, greek, menus } from "../../siteInfo";

const index = () => {
    return (
        <Box className="section">
            <Container sx={{ marginTop: "8rem" }}>
                <Grid container spacing={8}>
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
                                <NativeImage
                                    image={about.imageOne}
                                    url={about.imageOne.url}
                                    maxSize={600}
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
                            <Typography variant="h1">About Us</Typography>
                            <Divider />
                            <Typography sx={{ maxWidth: "75ch" }}>
                                <strong>Flavor Exceptional Catering</strong> was
                                founded in 2010 by Danny and Sandy and this is
                                just a placeholder paragraph, I just write it so
                                that I can see what a paragraph looks like on
                                the page, still just writing so that I get
                                enough content.
                            </Typography>
                            <Typography sx={{ maxWidth: "75ch" }}>
                                Catering is our passion. But we also like french
                                poodles, Disneyland, the Green Bay Packers,
                                democracy, Tom Hanks, cardio, and flip-flops.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    margin: "4rem 0",
                }}
            >
                <Stripes />
            </Box>
            <Container maxWidth="md">
                <Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <NativeImage
                                    image={about.imageTwo}
                                    url={about.imageTwo.url}
                                    maxSize={600}
                                />
                                <Typography
                                    variant="h3"
                                    sx={{ marginTop: "1rem" }}
                                >
                                    Chef Sandy
                                </Typography>
                                <Divider sx={{ width: "80%" }} />
                                <Typography>
                                    Sandy Archer has a tremendous gift of
                                    hospitality and a talent for preparation and
                                    presentation of food. She loves the joy that
                                    preparing a great tasting meal brings! Chef
                                    Sandy holds undergraduate and graduate
                                    business degrees, both from the University
                                    of Virginia. She has been involved in the
                                    restaurant business for more than 27 years
                                    working in several different capacities.
                                    Many people that know Chef Sandy call her a
                                    true Renaissance woman. Raising four
                                    children with her husband, running a
                                    business, staying physically fit, and
                                    serving her community in numerous ways makes
                                    her a true inspiration for many.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <NativeImage
                                    image={about.imageThree}
                                    url={about.imageThree.url}
                                    maxSize={600}
                                />
                                <Typography
                                    variant="h3"
                                    sx={{ marginTop: "1rem" }}
                                >
                                    Chef Danny
                                </Typography>
                                <Divider sx={{ width: "80%" }} />
                                <Typography>
                                    Daniel Niedermayer started his culinary
                                    career at a young age at the Keswick Hotel
                                    working as a banquet cook. He then went on
                                    to study business management at Bridgewater
                                    College. After leaving Bridgewater, he went
                                    to work for Hilton as a food and beverage
                                    director. There, he quickly fell back in
                                    love with the culinary aspects of
                                    hospitality. Training with the Culinary
                                    Institute of America and Hilton University,
                                    he continued mastering his craft of cooking
                                    and hospitality. He enjoys every aspect of
                                    the kitchen from leading his team of
                                    charismatic and talented cooks for large
                                    events to the more intimate approach needed
                                    for smaller, elegant cocktail gatherings.
                                    Danny would tell you that his strongest
                                    attributes are friendliness, patience, and
                                    amicable communication skills. He loves the
                                    experience of meeting each client and
                                    designing the menus for their event around
                                    their unique personality and specifications.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "4rem",
                        }}
                    >
                        <Favorite />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default index;
