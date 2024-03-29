import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import ImageFadeIn from "../../components/general/ImageFadeIn";

const works = [
    {
        name: "The Lot",
        date: "July 2023",
        description: "Suitcase Show",
        location: "Charlottesville VA",
        duration: "22 minutes",
        synopsis:
            "A parking lot opens out of a suitcase, and a small figure arrives with broom and dustpan to sweep it up. Based on my real-life experiences sweeping the parking lot at Bodo’s Bagels, as well as loosely based on the Lushootseed story “Lady Louse Lived There” as told by Vi Hilbert. Music and sound effects by Yessirov.",
        src: "/images/suitcase1.webp",
        link: "",
        alt: "alt text for image",
        imageHeight: 875,
        imageWidth: 500,
    },
    {
        name: "A Modest Puppetry Festival",
        date: "July 2023",
        description: "Festival",
        location: "Visible Records, Charlottesville VA",
        duration: "Multiple performances",
        synopsis:
            "I produced a one-night festival of puppet works for adults on July 30th, 2023. Participants included Charlottesville artists Molly Hickman, Dawn Schimke, Ophelia, and Yessirov, and visiting artists Audrey DuBois (Philadelphia) and Rae Red (Baltimore). Similar in format to a puppet slam but with longer performances allowed",
        src: "/images/modest1.webp",
        link: "",
        alt: "alt text for image",
        imageHeight: 875,
        imageWidth: 500,
    },
    {
        name: "Indigo and the Milk Cap",
        date: "December 2022",
        description: "Luminary puppet show as part of Let There Be Light",
        location: "Piedmont Virginia Community College",
        duration: "12 minutes",
        synopsis:
            "Indigo, a 3 foot bunraku-style puppet with three puppeteers, goes for a walk in the woods, and after much searching, happens upon a bright blue indigo milk-cap mushroom. In real life, indigo milk-cap mushrooms can be occasionally found in the wooded area where this piece was performed. Original score by Luke Dahl.",
        src: "/images/indigo1.webp",
        link: "https://cvillelight.org",
        alt: "alt text for image",
        imageHeight: 875,
        imageWidth: 500,
    },
    {
        name: "East Coast Tour",
        date: "September 2022",
        description: "Solo Tour",
        duration: "",
        location: "Multiple Locations",
        synopsis:
            "I performed I Made A Solemn Vow To Break The Sidewalk at the Black Cherry Puppet Theater's September puppet slam, and then performed three shows each at Palmetto Street Puppets in Brooklyn, New York, at Fox Market in Montpelier, Vermont, and at a private home in Ithaca, New York.",
        src: "/images/eastCoastTour.webp",
        link: "https://google.com",
        alt: "Performance",
        imageHeight: 1000,
        imageWidth: 750,
    },
    {
        name: "Dawn-Strider",
        date: "September 2021",
        description: "Outdoor giant paper mache puppet show",
        location: "Charlottesville, Virginia",
        duration: "40 minutes",
        synopsis:
            "I received permission from author Jane Yolen create this giant puppet adaptation of her 1974 short story. The giant Night-Walker, a two-story tall puppet with five puppeteers, is so widely feared that they don’t know how to make friends, and ends up accidentally making the sun disappear. Bravery and authentic communication save the day. Solo flute accompaniment was written and performed by Kelly Sulick.",
        src: "/images/dawnStrider.webp",
        link: "https://www.youtube.com/watch?v=QN2Uo1MdcMU",
        alt: "Giant puppet show",
        imageHeight: 500,
        imageWidth: 500,
    },
    {
        name: "I Love The World And Things In It",
        date: "December 2021",
        description:
            "Interactive shadow puppet activity as part of Let There Be Light",
        location: "Piedmont Virginia Community College",
        duration: "",
        synopsis:
            "I displayed various backgrounds on an overhead projector, and invited audience members to make up their own stories with an assortment of shadow puppets. Raccoons riding aquatic bicycles, flying fish, and disastrous tea parties ensued.",
        src: "/images/ILoveTheWorld1.webp",
        link: "",
        alt: "shadow puppets",
        imageHeight: 3200,
        imageWidth: 2400,
    },
    {
        name: "I Made A Solemn Vow To Break The Sidewalk",
        date: "April 2021",
        description: "Tabletop 3-D puppet piece for film and live performance",
        location: "Film",
        duration: "9 minutes",
        synopsis:
            "This life-cycle of a dandelion, a European plant, serves as a metaphor for how to be a European-descended American and disrupt the oppressive structures of our society. The film version includes old-fashioned editing-based special effects. Original vocal score by Miranda Elliott-Rader, Heidi Bird, and Julia Gentlestrength.",
        src: "/images/dandelion.webp",
        link: "https://youtu.be/1I4vIjgiLBg",
        alt: "dandelion weed",
        imageHeight: 750,
        imageWidth: 1000,
    },
    {
        name: "Understory",
        date: "December 2020",
        description:
            "Combined luminary and shadow puppet show as part of Let There Be Light",
        location: "Piedmont Virginia Community College",
        duration: "20 minutes",
        synopsis:
            "This piece tells the story of trees in the Eastern woodlands communicating and sharing resources via underground mycelium, the fungal network that makes up the so-called “wood wide web”. The trees, a 12-foot pine trunk and a beech seedling, scroll by on the overhead projector while 3-D lit mycelium reaches out from the roots on the projector screen and interacts with luminary mushrooms in the foreground.",
        src: "/images/Understory1.webp",
        link: "",
        alt: "",
        imageHeight: 1333,
        imageWidth: 1000,
    },
    {
        name: "Take Me Back, O Hills I love",
        date: "May 2020",
        description:
            "Shadow crankie on two simultaneous overhead projectors, created for film.",
        location: "Film",
        duration: "5 minutes",
        synopsis:
            "Created in the early months of quarantine, the sound recordings for this piece were recorded by each singer separately in Virginia, New York, and Vermont, and digitally compiled.",
        src: "/images/Hills2.webp",
        link: "https://youtu.be/CcBpQ7uxWTU",
        alt: "",
        imageHeight: 1333,
        imageWidth: 1000,
    },
    {
        name: "Radicackalacky Radical Puppetry Convergence",
        date: "September 2019",
        description: "Organized by Paperhand Puppet Intervention",
        location: "Carrboro, North Carolina",
        duration: "",
        synopsis:
            "Performed Creation (2018) as an opening act for performer Rae Red.",
        src: "/images/Radica1.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    {
        name: "Shadow of Shadow of Shadow",
        date: "November 2019",
        description: "Commissioned by Alex Christie as part of SOLOS II.",
        location: "The Bridge PAI, Charlottesville, Virginia",
        duration: "25 minutes",
        synopsis:
            "This abstract piece re-interprets a solo piano piece, Shadow by Rebecca Saunders, for two projectors, a slide projector representing the right hand and an overhead projector representing the left hand. Inspired by the original piece’s consonant chords that slowly reveal themselves out of dissonance, the overhead projector is darkened to almost black such that it cannot be seen when the slide projector is on, and when the slide projector is covered, cut paper images of solid black on the dark background slowly appear as the audience’s eyes adjust.",
        src: "/images/Shadow1.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    {
        name: "Black Shining Angels",
        date: "June 2019",
        description: "Shadow puppet performance.",
        location: "McGuffey Art Center, Charlottesville, Virginia",
        duration: "10 minutes",
        synopsis:
            "Illustrating an original song sung live, this piece celebrates the tenacity of black locust trees and carpenter bees. Features a growing tree and a face with blinking eyes. ",
        src: "/images/Angels1.webp",
        link: "",
        alt: "",
        imageHeight: 1333,
        imageWidth: 1000,
    },
    {
        name: "The Phosphorous Cycle",
        date: "April 2019",
        description: "Overhead projector crankie with lights.",
        location: "McGuffey Art Center, Charlottesville VA",
        duration: "10 minutes",
        synopsis:
            "A colorful overhead projector piece, The Phosphorus Cycle illustrates how phosphorus moves through the world with narration and song.",
        src: "/images/Phos1.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    {
        name: "Creation",
        date: "September 2018",
        description: "Overhead projector shadow puppet show",
        location: "Charlottesville, Virginia",
        duration: "20 minutes",
        synopsis:
            "Using a-capella song and biblically-influenced poetic language, Creation presents a feminist and scientifically-accurate history of the universe from the beginning of time to the present moment, illustrated by a restrained palette of abstract shapes",
        src: "/images/Creation1.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },

    {
        name: "Internship",
        date: "Summer 2018",
        description: "Paperhand Puppet Intervention Internship",
        location: "Saxapahaw, North Carolina",
        duration: "",
        synopsis:
            "Helped build their show In The Heart Of The Fire. Collaborated with fellow artists and assisted backstage.",
        src: "/images/internship.webp",
        link: "https://paperhand.org",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    {
        name: "The Ocean, At Night, It Comforts Me",
        date: "April 2018",
        description: "Luminary puppet show performed at ShenFringe festival",
        location: "Staunton, Virginia",
        duration: "20 minutes",
        synopsis:
            "Internally illuminated paper maché sea creatures move hypnotically, and as authentically as we can make them, in this ballet-like wordless piece performed in darkness. Features such delights as “shrimp and nautilus fail once again to see one another” and “whelk fights off being eaten by seastar”. Original electronic score by Alex Christie. ",
        src: "/images/ocean.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    {
        name: "Parade Costumes",
        date: "1996-2012",
        description: "Frequent Participation",
        location: "Olympia, Washington",
        duration: "",
        synopsis:
            "I grew up participating regularly in the Procession of The Species in Olympia, Washington. Pictured is a to-scale costume of a Western skunk cabbage flower, May 2011.",
        src: "/images/parade.webp",
        link: "",
        alt: "",
        imageHeight: 600,
        imageWidth: 1000,
    },
    // {
    //     name: "",
    //     date: "",
    //     description: "",
    //     location: "",
    //     duration: "",
    //     synopsis: "",
    //     src: "/images/aboutBlue.webp",
    //     link: "",
    //     alt: "",
    //     imageHeight: 600,
    //     imageWidth: 1000,
    // },
];

const index = () => {
    return (
        <Container>
            <Box>
                <Typography
                    variant="h1"
                    sx={{ margin: "1em 0", textAlign: "center" }}
                >
                    Works
                </Typography>
                <Grid container spacing={4}>
                    {works.map((work, index) => {
                        return (
                            <>
                                <Grid key={index} item xs={12} md={7}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography>{`${work.location}, ${
                                                work.date
                                            } ${work.duration && "-"} ${
                                                work.duration
                                            }`}</Typography>

                                            <Typography
                                                variant="h3"
                                                component="p"
                                                sx={{
                                                    margin: ".1em 0 .35em 0",
                                                    fontSize: {
                                                        xs: "2rem",
                                                        md: "3rem",
                                                    },
                                                }}
                                            >
                                                {work.name}
                                            </Typography>
                                            <Typography
                                                sx={{ fontStyle: "italic" }}
                                            >
                                                {work.description}
                                            </Typography>
                                            <Divider
                                                sx={{ margin: "1rem 0" }}
                                            />
                                            <Typography>
                                                {work.synopsis}
                                            </Typography>
                                            {work.link && (
                                                <>
                                                    <br />
                                                    <Link href={work.link}>
                                                        <Typography
                                                            sx={{
                                                                textDecoration:
                                                                    "underline",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            See More
                                                        </Typography>
                                                    </Link>
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            height: "100%",
                                        }}
                                    >
                                        <ImageFadeIn
                                            unoptimized
                                            src={work.src}
                                            maxSize={1000}
                                            height={work.imageHeight}
                                            width={work.imageWidth}
                                            alt={work.alt}
                                        ></ImageFadeIn>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ margin: "1rem" }} />
                                </Grid>
                            </>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
};

export default index;
