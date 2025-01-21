import React from "react";
import HomeSection from "../Sections/Home"
import About from "../Sections/About"
import Facilities from "../Sections/Activities"
import Packages from "../Sections/Packages"
import Gallery from "../Sections/Gallery"
import FAQs from "../Sections/FAQ"
import Contact from "../Sections/Contact"

function Home() {
    return (
        <>
            <HomeSection />
            <About />
            <Facilities />
            <Packages />
            <Gallery />
            <FAQs />
            <Contact />
        </>
    );
}

export default Home;
