import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: "8rem 0" }}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        Contact
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{}}>
                                Find out about future shows by joining our email
                                list.
                            </Typography>
                            <br />
                            <Typography>
                                For other inquiries, including how to donate,
                                contact Miranda at miranda.elliott.rader at
                                gmail dot com or at four three four five three
                                five one nine one zero.
                            </Typography>
                            <br />
                            {/* <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Typography>Phone:</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography>(434) 760-3777</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography>Email:</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography>
                                            flavorcateringevents@gmail.com
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography>Address:</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Typography>600 Concord Ave.</Typography>
                                            <Typography>
                                                Charlottesville, VA 22903
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm config={contactConfig} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default index;
