import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Container from "../Components/Container";
import Video from "../assets/IntroVideo.mp4";
import Thumbnail from "../assets/VideoThumbnail.svg";
import GallerySection from "../Components/GallerySection";

function Gallery() {
    const location = useLocation();
    const galleryRef = useRef(null);

    useEffect(() => {
        if (location.hash === "#gallery" && galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="pt-28 pb-20 px-5 md:px-10" ref={galleryRef}>
            <Container>
                <div className="text-center font-bold text-3xl md:text-4xl">
                    <p className="uppercase text-yellow">Stay & Play</p>
                    <p className="uppercase text-primary">
                        At Vishwanadh Sports&nbsp;club
                    </p>
                </div>
                <div>
                    <video
                        src={Video}
                        className="w-full h-auto mt-10 rounded-xl md:rounded-2xl shadow-customShadow"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster={Thumbnail}
                    />
                </div>
                <div className="my-10 flex items-center justify-center">
                    <GallerySection />
                </div>
            </Container>
        </div>
    );
}

export default Gallery;