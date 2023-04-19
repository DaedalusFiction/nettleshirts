import { Box, Fade } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ImageFadeIn = ({ src, alt, maxSize, width }) => {
    const [loaded, setLoaded] = useState(false);
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const loadImage = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setLoaded(true);
    };
    return (
        <Fade in={loaded}>
            <Box>
                <Image
                    src={src}
                    // blurDataURL={blur ? blur : image}
                    // placeholder="blur"
                    //has to be unoptimized to work with firebase storage, apparently
                    unoptimized
                    width={maxSize}
                    height={maxSize / ratio}
                    onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        loadImage(naturalWidth, naturalHeight)
                    }
                    objectFit="cover"
                    alt={alt}
                />
            </Box>
        </Fade>
    );
};

export default ImageFadeIn;
