import { Favorite, StarBorder } from "@mui/icons-material";
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
                    <Typography variant="h1">Sample Luncheon Menu</Typography>
                    <Box sx={{ margin: "1rem 0" }}>
                        <SizedImage
                            image={menus.imageOne}
                            height={50}
                            width={150}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Stations
                    </Typography>
                    <Typography variant="body2">
                        Variety of Sandwiches on Marie Bette Bread
                    </Typography>
                    <Typography variant="caption">
                        Peruvian Chicken Salad
                    </Typography>
                    <Typography variant="caption">
                        Rare Roast Beef, Baby Swiss, Shaved Onion, Horseradish
                        Aioli, Spring Mix
                    </Typography>
                    <Typography variant="caption">
                        Smoked Turkey Breast, Tangy Slaw, Creamy Cranberry
                        Spread
                    </Typography>
                    <Typography variant="caption">
                        Veggie Heaven Wrap
                    </Typography>
                    <Typography variant="body2">
                        Herb & Sun-dried Tomato Pasta Salad
                    </Typography>
                    <Typography variant="body2">
                        Build-Your-Own Harvest Salad
                    </Typography>
                    <Typography variant="caption">Grilled Chicken</Typography>
                    <Typography variant="caption">
                        Sliced Grilled Steak
                    </Typography>
                    <Typography variant="caption">
                        Lion&rsquo;s Mane Mushroom Cake (vegetarian)
                    </Typography>
                    <Typography variant="caption">
                        Pickled Onions, Green Beans
                    </Typography>
                    <Typography variant="caption">Diced Egg</Typography>
                    <Typography variant="caption">Center-Cut Bacon</Typography>
                    <Typography variant="caption">Roasted Pepitas</Typography>
                    <Typography variant="caption">
                        Sun-Dried Cranberries
                    </Typography>
                    <Typography variant="caption">
                        Roasted Seasonal Potatoes & Beets
                    </Typography>
                    <Typography variant="caption">
                        Marinated Cucumbers & Tomatoes
                    </Typography>
                    <Typography variant="caption">Crisp Romaine</Typography>
                    <Typography variant="caption">
                        Dijon Vinaigrette, Sweet Honey Mustard, Creamy Dill
                    </Typography>

                    <Typography variant="body2">
                        Chicken and Couscous soup
                    </Typography>
                    <Typography variant="body2">
                        Variety of Sweet Treats
                    </Typography>

                    <Typography variant="body2">Fresh Fruit Salad</Typography>

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
