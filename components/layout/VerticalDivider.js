import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const VerticalDivider = ({ width, color }) => {
    return (
        <Grid
            item
            xs={12}
            md={width}
            sx={{
                display: {
                    xs: "none",
                    md: "flex",
                    flexDirection: "column",
                },
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Divider
                    orientation="vertical"
                    sx={{
                        background: color,
                    }}
                />
            </Box>
        </Grid>
    );
};

export default VerticalDivider;
