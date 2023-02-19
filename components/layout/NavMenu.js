import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import theme from "../../styles/themes/theme";

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <MenuIcon sx={{ color: theme.palette.custom.darkMuted }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Link href="/menus">
                    <MenuItem onClick={handleClose}>Sample Menus</MenuItem>
                </Link>
                <Link href="/greek-life">
                    <MenuItem onClick={handleClose}>Greek Life</MenuItem>
                </Link>
                <Link href="/about">
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Link>
            </Menu>
        </Box>
    );
};

export default NavMenu;
