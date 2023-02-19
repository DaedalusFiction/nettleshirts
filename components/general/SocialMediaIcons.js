import { IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import { LinkedIn } from "@mui/icons-material";
const SocialMediaIcons = ({ fontSize, color }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Link href="https://linkedin/in/davidjsorensen.com">
                <Tooltip title="LinkedIn">
                    <IconButton aria-label="LinkedIn">
                        <LinkedIn sx={{ fontSize: fontSize, color: color }} />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://www.facebook.com/people/Fictional-Web/100086293211231/">
                <Tooltip title="facebook">
                    <IconButton aria-label="facebook">
                        <FacebookIcon
                            sx={{ fontSize: fontSize, color: color }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://twitter.com/fictionalweb">
                <Tooltip title="twitter">
                    <IconButton aria-label="twitter">
                        <TwitterIcon
                            sx={{ fontSize: fontSize, color: color }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
        </Stack>
    );
};

export default SocialMediaIcons;
