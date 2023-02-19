import { Favorite, StarBorder } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import SizedImage from "../../components/general/SizedImage";
import { menus } from "../../siteInfo";

const index = () => {
    return (
        <Box className="section">
            <Container>
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
                            marginBottom: "4rem",
                        }}
                    >
                        <NativeImage
                            image={menus.imageThree}
                            url={menus.imageThree.url}
                            maxSize={800}
                        />
                    </Box>
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        Sample Menus
                    </Typography>
                    <StarBorder />
                    <Typography sx={{ maxWidth: "75ch", textAlign: "center" }}>
                        Whether you&rsquo;re looking for a modest selection of
                        choice appetizers, a hearty luncheon, or an all-out
                        celebratory feast,{" "}
                        <strong>Flavor Exceptional Catering</strong> has you
                        covered. We&rsquo;ll work directly with you to create a
                        menu that will satisfy each an every one of your guests,
                        and we&rsquo;ll do it with the quality of service that
                        has established us as Charlottesville&rsquo;s premier
                        catering company.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                        margin: "4rem 0",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: "2rem", textAlign: "center" }}
                        className="hover-underline-animation"
                    >
                        <Link href="/menus/breakfast">Breakfast</Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: "2rem", textAlign: "center" }}
                        className="hover-underline-animation"
                    >
                        <Link href="/menus/luncheon">Luncheon</Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: "2rem", textAlign: "center" }}
                        className="hover-underline-animation"
                    >
                        <Link href="/menus/dinner">Dinner</Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: "2rem", textAlign: "center" }}
                        className="hover-underline-animation"
                    >
                        <Link href="/menus/cocktail">Cocktail</Link>
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Favorite />
                </Box>
            </Container>
        </Box>
    );
};

export default index;
