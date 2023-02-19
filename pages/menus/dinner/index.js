import { Favorite, StarBorder } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { menus } from "../../../siteInfo";
import theme from "../../../styles/themes/theme";

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
                    <Typography variant="h1">Sample Dinner Menu</Typography>
                    <Box sx={{ margin: "1rem 0" }}>
                        <SizedImage
                            image={menus.imageOne}
                            height={50}
                            width={150}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        To Kick Things Off
                    </Typography>
                    <Typography variant="body2">Passed Appetizers</Typography>
                    <Typography variant="caption">Baby Wellington</Typography>
                    <Typography variant="caption">Ceviche Spoon</Typography>
                    <Typography variant="caption">
                        Lion&rsquo;s Mane Mushroom Cake with Drizzle
                    </Typography>

                    <Typography variant="body2">
                        Flavor&rsquo;s Grazing Table
                    </Typography>

                    <Typography
                        variant="caption"
                        sx={{ textAlign: "center", maxWidth: "75ch" }}
                    >
                        Dumplings, Variety of Cheeses, Charcuterie,
                        Mediterranean Goat Cheese Board, Vegetables, Fruit,
                        Crostini, Gluten-Free Crackers, Martini Glasses of
                        Guacamole with House Chips
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Main Event
                    </Typography>

                    <Typography variant="body2">
                        Dry-Rub Beef Tenderloin
                    </Typography>
                    <Typography variant="body2">
                        Sliced Mediterranean Chicken Breast
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{ textAlign: "center", maxWidth: "75ch" }}
                    >
                        Flavor&rsquo;s Creamy Tzatziki, Green Goddess, Harissa
                        and House Steak
                    </Typography>

                    <Typography variant="body2">
                        Stuffed Portobello Mushroom
                    </Typography>
                    <Typography variant="body2">
                        Crispy Roasted Fingerlings
                    </Typography>
                    <Typography variant="body2">
                        Lemon & Herb Basmati Rice
                    </Typography>
                    <Typography variant="body2">
                        Harvest Vegetable Platter
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{ textAlign: "center", maxWidth: "75ch" }}
                    >
                        Oven-Roasted and Grilled Vegetables Zucchini, Beets,
                        Brussels, Asparagus, Green Beans, Peppers, Onions
                    </Typography>
                    <Typography variant="body2">
                        House Salad with Marinated Heirloom Tomatoes
                    </Typography>
                    <Typography variant="caption">
                        Side of Goat Cheese
                    </Typography>
                    <Typography variant="body2">
                        Naan and Focaccia Breads with Roasted Red Pepper Hummus
                    </Typography>

                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Dessert
                    </Typography>
                    <Typography variant="body2">
                        Build-Your-Own Strawberry Shortcake
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
