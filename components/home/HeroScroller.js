import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../styles/themes/theme";

const HeroScroller = () => {
    const [descriptions, setDescriptions] = useState([
        "Exceptional Events",
        "Beautiful Weddings",
        "Productive Meetings",
        "Awesome Birthdays",
        "Soulful Celebrations",
    ]);
    return (
        <Box
            className="hero-scroller"
            sx={{ height: "5rem", overflow: "hidden" }}
            onAnimationEnd={() => {}}
        >
            {descriptions.map((description, index) => {
                return (
                    <Typography
                        key={index}
                        variant="h1"
                        sx={{
                            color: theme.palette.custom.light,
                            textAlign: "center",
                            marginBottom: "2em",
                        }}
                    >
                        {description}
                    </Typography>
                );
            })}
        </Box>
    );
};

export default HeroScroller;
