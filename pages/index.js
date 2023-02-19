import { Box, Button, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { homePage, personalItems, portfolioProjects } from "../siteInfo";
import NativeImage from "../components/general/NativeImage";
import BlockQuote from "../components/general/BlockQuote";
import ProjectPreview from "../components/home/ProjectPreview";
import ExpandingText from "../components/general/ExpandingText";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import {
    Favorite,
    MailOutline,
    OpenInNew,
    StarBorder,
    SubdirectoryArrowLeft,
} from "@mui/icons-material";
import SizedImage from "../components/general/SizedImage";
import CornerBorders from "../components/general/CornerBorders";
import SellingPoint from "../components/home/SellingPoint";
import Link from "next/link";
import MenuPreview from "../components/home/MenuPreview";
import VerticalDivider from "../components/layout/VerticalDivider";
import Stripes from "../components/layout/Stripes";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Stripes />
            <Container maxWidth="xl">
                <Grid className="section" id="showcase" container spacing={4}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{ textAlign: "center" }}
                            >
                                Create memories that will last a lifetime
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "75ch",
                                    marginBottom: "1em",
                                }}
                            >
                                <strong>Flavor Exceptional Catering</strong>{" "}
                                provides outstanding service, from simple
                                drop-offs to full-service events. Whether you
                                are looking to feed a few for a breakfast or
                                luncheon or make your next intimate event
                                exceptional, we are here to craft an experience
                                that fits your needs perfectly!
                            </Typography>
                            <Favorite />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box
                className="section"
                sx={{ backgroundColor: theme.palette.primary.main }}
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Responsive">
                                There&rsquo;s nothing we love more than working
                                directly with our clients and getting to know
                                their exact thoughts and ideas, so that we can
                                source foods and products based on their
                                preferences. Whether it&rsquo;s meats from local
                                Ragged Branch Farms or produce from growers
                                along Skyline Drive, we are committed to using
                                the freshest ingredients for every occasion.
                            </SellingPoint>
                        </Grid>

                        <VerticalDivider
                            width={0.75}
                            color={theme.palette.custom.lightMuted}
                        />
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Attentive">
                                We will make sure that every detail taken care
                                of by attending walk-throughs and maintaining
                                contact throughout the days leading up to your
                                event, so that if anything changes, we can
                                handle it. We&rsquo;ll staff your event
                                thoroughly so that each guest feels that they
                                are taken care of on a personal level.
                            </SellingPoint>
                        </Grid>
                        <VerticalDivider
                            width={0.75}
                            color={theme.palette.custom.lightMuted}
                        />
                        <Grid item xs={12} md={3.5}>
                            <SellingPoint title="Experienced">
                                <strong>Flavor</strong> has over 30 years
                                combined experience in the fields of Catering
                                and Hospitality. We have executed countless
                                successful events, from weddings and graduation
                                parties to corporate lunches and all-day events.
                                We guarantee that our experience will make your
                                next event stress-free and remembered for years
                                to come.
                            </SellingPoint>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: theme.palette.secondary.main }}>
                <Box
                    sx={{
                        background: "white",
                        clipPath: "ellipse(200% 78% at 10% 20%)",
                    }}
                >
                    <Container className="section">
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        alignItems: "center",
                                        padding: "2rem",
                                        height: "100%",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "4rem",
                                        }}
                                    >
                                        Our Mission
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: "8rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <Divider
                                            sx={{
                                                background:
                                                    theme.palette.custom
                                                        .darkMuted,
                                            }}
                                        />
                                    </Box>
                                    <Typography>
                                        At{" "}
                                        <strong>
                                            Flavor Exceptional Catering
                                        </strong>
                                        , the success of your event is our
                                        number one priority. We bring
                                        thoughtfully crafted food and
                                        top-quality service to any celebration.
                                    </Typography>
                                    <Typography>
                                        We strive to provide the highest quality
                                        food and service to each of our clients.
                                        Whether you are planning a wedding,
                                        hosting a corporate event, or putting
                                        together a once-in-a-lifetime brunch, we
                                        will work closely with you to craft an
                                        experience that will have everyone
                                        talking about it for years to come.
                                    </Typography>
                                    <Typography>
                                        Our mission may end at the table, but it
                                        starts well before that. We are
                                        committed to sourcing all of our
                                        ingredients from local, sustainable, and
                                        fair-trade vendors whenever possible. We
                                        believe that great food comes from great
                                        community, and we design our experiences
                                        to reflect that commitment.
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link href="/about">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                Learn More
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ padding: "2rem" }}>
                                    <NativeImage
                                        image={homePage.image}
                                        url={homePage.image.url}
                                        maxSize={800}
                                    />
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontSize: ".85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Chefs Danny and Sandy
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box
                className="section"
                sx={{ backgroundColor: theme.palette.secondary.main }}
            >
                <Container maxWidth="xl">
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.custom.light,
                            textAlign: "center",
                            fontSize: "4rem",
                            marginBottom: ".5em",
                        }}
                    >
                        Sample Menus
                    </Typography>
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="breakfast"
                                    image={homePage.image3}
                                >
                                    There&rsquo;s a reason why the first meal of
                                    the day is the most important. Start your
                                    event off right with a selection of healthy,
                                    fresh, delicious breakfast options, local
                                    coffee, and hot tea.
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                color={theme.palette.custom.lightMuted}
                                width={0.4}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="luncheon"
                                    image={homePage.image4}
                                >
                                    Whether you&rsquo;re looking for a light
                                    collation or a hearty meal, Flavor
                                    Exceptional Catering is ready with a variety
                                    of luncheon options tailored to your
                                    event&rsquo;s needs.
                                </MenuPreview>
                            </Grid>

                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.lightMuted}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="dinner"
                                    image={homePage.image5}
                                >
                                    Let&rsquo;s create an experience that you
                                    and your loved ones can bond over. Flavor
                                    Exceptional Catering will craft a
                                    personalized dinner menu that will leave a
                                    long-lasting impression.
                                </MenuPreview>
                            </Grid>
                            <VerticalDivider
                                width={0.4}
                                color={theme.palette.custom.lightMuted}
                            />
                            <Grid item xs={12} md={2.7}>
                                <MenuPreview
                                    title="cocktail"
                                    image={homePage.image6}
                                >
                                    There&rsquo;s nothing better than a wide
                                    selection of delicious appetizers to bring
                                    out the best of conversation. Between our
                                    unique flavor profiles and vegetarian and
                                    vegan options, there&rsquo;s sure to be
                                    something for everyone.
                                </MenuPreview>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Stripes />
            <Container maxWidth="xl">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    // height: "100%",
                                    flexDirection: "column",
                                    padding: "2rem",
                                    gap: "1rem",
                                }}
                            >
                                <Typography variant="h2">
                                    Our Partners
                                </Typography>
                                <StarBorder
                                    color={theme.palette.primary.main}
                                />
                                <Typography
                                    sx={{
                                        maxWidth: "35ch",
                                        textAlign: "center",
                                        fontStyle: "italic",
                                    }}
                                >
                                    We also provide healthy meals daily for UVA
                                    Greek Life, pre- and post-game and practice
                                    meals for UVA athletics. We are also the
                                    official caterer of the{" "}
                                    <strong>Foxfield Races</strong>.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".5rem",
                                }}
                            >
                                <Divider />
                                <Typography variant="h6">
                                    Preferred Venues
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                Michael Shaps Winery
                                            </Typography>
                                            <Typography>
                                                Dairy Market
                                            </Typography>
                                            <Typography>
                                                UVA Alumni Hall
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Typography>
                                                The Code Building
                                            </Typography>
                                            <Typography>
                                                Eastwood Winery
                                            </Typography>
                                            <Typography>
                                                The Barn at Edgewood
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(/images/stock3.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: { xs: "0% 0%", md: "50% 50%" },
                    height: "50vh",
                }}
            />
            <Container maxWidth="xl">
                <Grid className="section" id="showcase" container spacing={4}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{ textAlign: "center" }}
                            >
                                Let us take care of you
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "75ch",
                                    marginBottom: "1em",
                                }}
                            >
                                Planning an event doesn&rsquo;t have to be a
                                hassle. Let us do all the heavy lifting, so that
                                you can get back to what&rsquo;s important:
                                spending quality time with your family and
                                cherished ones.
                            </Typography>
                            <Favorite />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}
