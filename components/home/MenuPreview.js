import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";

const MenuPreview = ({ children, title, image }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <Box>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: {
                            xs: "0% 0%",
                            md: "50% 50%",
                        },
                        padding: "30vh 0",
                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        color: theme.palette.custom.light,
                        marginTop: "1em",
                    }}
                >
                    {title}
                </Typography>
                <Box sx={{ margin: "1rem 5rem" }}>
                    <Divider
                        sx={{
                            background: theme.palette.custom.lightMuted,
                        }}
                    />
                </Box>
                <Typography
                    sx={{
                        textAlign: "center",
                        color: theme.palette.custom.light,
                        margin: "1em 1em 0 1em",
                    }}
                >
                    {children}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3rem",
                }}
            >
                <Link href={`/menus/${title}`}>
                    <Button
                        endIcon={<ArrowRightAlt />}
                        variant="contained"
                        color="primary"
                    >
                        View Menu
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default MenuPreview;
