import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontWeight: "600",
                            }}
                        >
                            Get in Touch!
                        </Typography>
                        <Typography>
                            If you&rsquo;re planning a wedding, corporate event,
                            birthday party, or get-together, or if you&rsquo;re
                            interested in adding our Greek Life program to your
                            fraternity or sorority, fill out this form and
                            we&rsquo;ll be in touch!
                        </Typography>
                        <br />
                        <Grid container spacing={2}>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
