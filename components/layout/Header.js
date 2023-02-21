import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Header = ({ children }) => {
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        console.log(router.asPath, pathname);
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                padding: "1rem 0",
            }}
        >
            <Link href="/">
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontWeight: "600",
                        "&:hover": { opacity: "100%" },
                        opacity: pathname === "/" ? "100%" : "70%",
                    }}
                >
                    Home
                </Typography>
            </Link>
            <Link href="/works">
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontWeight: "600",
                        "&:hover": { opacity: "100%" },
                        opacity: pathname === "/works" ? "100%" : "70%",
                    }}
                >
                    Works
                </Typography>
            </Link>
            <Link href="/about">
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontWeight: "600",
                        "&:hover": { opacity: "100%" },
                        opacity: pathname === "/about" ? "100%" : "70%",
                    }}
                >
                    About
                </Typography>
            </Link>
            <Link href="/contact">
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontWeight: "600",
                        "&:hover": { opacity: "100%" },
                        opacity: pathname === "/contact" ? "100%" : "70%",
                    }}
                >
                    Contact
                </Typography>
            </Link>
        </Box>
    );
};

export default Header;
