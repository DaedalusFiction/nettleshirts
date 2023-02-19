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
                    <Typography variant="h1">Sample Breakfast Menu</Typography>
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
                        Variety of Mini Egg Frittatas:
                    </Typography>
                    <Typography variant="caption">
                        Spinach Tomato Feta
                    </Typography>
                    <Typography variant="caption">
                        Fire-Roasted Southwest Pepper & Cheddar
                    </Typography>

                    <Typography variant="body2">
                        Tofu Scramble (vegan)
                    </Typography>
                    <Typography variant="caption">
                        Sriracha & Ketchup
                    </Typography>
                    <Typography variant="body2">
                        Bacon & Turkey Sausage
                    </Typography>
                    <Typography variant="body2">
                        French Toast & Syrup
                    </Typography>
                    <Typography variant="body2">
                        Best Breakfast Potatoes
                    </Typography>
                    <Typography variant="body2">Fresh Fruit Salad</Typography>
                    <Typography variant="body2">Variety of Pastries</Typography>
                    <Typography variant="caption">
                        Gluten-free options
                    </Typography>

                    <Typography variant="h6" sx={{ marginTop: ".5em" }}>
                        Beverages
                    </Typography>
                    <Typography variant="body2">Orange Juice</Typography>
                    <Typography variant="body2">Infused Water</Typography>
                    <Typography variant="body2">Bottled Water</Typography>
                    <Typography variant="body2">Coffee</Typography>
                    <Typography variant="body2">
                        Black and Herbal Teas
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
