import { Favorite } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { menus } from "../../../siteInfo";

const index = () => {
    return (
        <Box className="section menu" sx={{ marginTop: "8rem" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: ".5rem",
                    }}
                >
                    <Typography variant="h1">Sample Cocktail Menu</Typography>
                    <Box sx={{ margin: "1rem 0" }}>
                        <SizedImage
                            image={menus.imageOne}
                            height={50}
                            width={150}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Flavor&rsquo;s Grazing Table
                    </Typography>
                    <Typography variant="body2">
                        Variety of Cheeses and Cured Meats
                    </Typography>
                    <Typography variant="body2">
                        Smoked Gouda Dip, Roasted Red Pepper Hummus, House
                        Salsa, Guacamole
                    </Typography>
                    <Typography variant="body2">
                        Crackers, House-Made Chips, Gluten-Free Crackers and
                        Chips
                    </Typography>
                    <Typography variant="body2">
                        Variety of Vegetables and Antipasta, Stuffed Jalapenos
                    </Typography>
                    <Typography variant="body2">
                        Hot Spinach-Artichoke Dip with House-Made Chips
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Passed Appetizers
                    </Typography>

                    <Typography variant="body2">
                        Beef Tenderloin Baby Red with Sweet Aioli
                    </Typography>
                    <Typography variant="body2">
                        Bacon-Wrapped Sweet Potato
                    </Typography>
                    <Typography variant="body2">
                        Lion&rsquo;s Mane Cakes
                    </Typography>
                    <Typography variant="caption">House Drizzle</Typography>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Stations
                    </Typography>
                    <Typography variant="body2">
                        Chicken and Vegetarian Dumplings
                    </Typography>
                    <Typography variant="caption">
                        Ginger-Soy Dipping Sauce
                    </Typography>
                    <Typography variant="caption">Thai Crunch Salad</Typography>
                    <Typography variant="body2">
                        Chilled Mediterranean Shrimp Skewers
                    </Typography>
                    <Typography variant="caption">
                        Whipped Basil Feta
                    </Typography>
                    <Typography variant="caption">
                        Dried Balsamic Glaze
                    </Typography>

                    <Typography variant="body2">Mac & Cheese Bites</Typography>
                    <Typography variant="caption">House Sauce</Typography>
                    <Typography variant="body2">
                        Sriracha Honey Turkey Meatballs
                    </Typography>
                    <Typography variant="body2">
                        Sweet Hawaiian Rolls with Holiday Ham & Cheese
                    </Typography>

                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Dessert
                    </Typography>
                    <Typography variant="body2">
                        Strawberry Chardonnay Trifles
                    </Typography>
                    <Typography variant="body2">
                        Heavenly Brownies with Raspberries
                    </Typography>
                    <Typography variant="body2">
                        Lemon Cooler Cookies
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Bon Apetit
                    </Typography>
                    <Favorite />
                </Box>
            </Container>
        </Box>
    );
};

export default index;
