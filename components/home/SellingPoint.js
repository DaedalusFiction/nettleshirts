import { StarBorder } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";

const SellingPoint = ({ children, title }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1em",
                padding: "3rem 0",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: theme.palette.custom.light,
                    textTransform: "uppercase",
                }}
            >
                {title}
            </Typography>
            <StarBorder sx={{ color: theme.palette.secondary.main }} />
            <Typography
                sx={{
                    color: theme.palette.custom.lightMuted,
                    textAlign: "center",
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default SellingPoint;
