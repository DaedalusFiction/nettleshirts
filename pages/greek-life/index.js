import { Favorite, StarBorder } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import { greek, menus } from "../../siteInfo";

const index = () => {
    return (
        <Container className="section">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "4rem",
                        }}
                    >
                        <NativeImage
                            image={greek.imageOne}
                            url={greek.imageOne.url}
                            maxSize={800}
                        />
                    </Box>
                </Container>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Greek Life
                </Typography>
                <StarBorder />

                <Typography sx={{ maxWidth: "75ch", textAlign: "center" }}>
                    When you choose to join Greek life at UVA, whether a
                    sorority or fraternity, the last thing you want your members
                    to worry about is the food. Flavor has you covered with
                    great, healthy meals for lunch or dinner and provides
                    exceptional service. You can trust us when you say your
                    chapter has the best food.
                </Typography>
                <Link href="/contact">
                    <Button variant="outlined" color="primary">
                        Get Started
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default index;
