import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Bg from "../assets/About/Bg.jpg";
import Rating from "../assets/About/4.7Rating.svg"
import Container from "../Components/Container";
import AboutImage from "../assets/About/About.png";

function About() {
    const aboutRef = useRef(null);
    const location = useLocation();

    console.log(location);

    useEffect(() => {
        if (location.hash === "#about" && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="w-full bg-gradient-to-br  h-max pt-24 md:pt-30 pb-20" style={{background:`linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.6)), url(${Bg}`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div ref={aboutRef} className="font-mplus text-text pt-28 md:pt-32">
                <Container>
                    <div className="px-5 sm:px-10">
                        <p className="font-extralight text-2xl sm:text-4xl lg:text-5xl tracking-[0.2rem] md:tracking-[0.5rem] leading-[2rem] sm:leading-[3rem] md:leading-[4rem] text-center">
                            Welcome to <span className="font-semibold">Vishwanadh Sports Club</span>, where adventure
                            meets excellence.
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-col md:flex-row gap-10 w-full mt-16 mb-10 px-5 sm:px-10">
                        <div className="w-[80%] relative md:w-[40%] flex items-center justify-center">
                            <div className="bg-secondary/80 h-[80vw] w-[80vw] sm:h-72 sm:w-72 absolute rounded-full blur-[100px]"></div>
                            <img
                                src={AboutImage}
                                alt="Vishwanadh Sports Club"
                                className="relative"
                            />
                        </div>
                        <div className="w-full md:w-[60%]">
                            <p className="text-center md:text-left font-light text-text text-base md:text-lg tracking-[0.07rem]">
                                Situated in Visakhapatnam’s heart, <span className="font-semibold text-yellow">Vishwanadh
                                Sports Club</span> offers 40 acres of fun-packed
                                activities, world-class sports facilities, and
                                serene greenery. With a stellar <span className="text-yellow font-semibold">4.7-star</span> rating
                                on Google, we cater to adventure seekers,
                                families, and professionals alike. From
                                thrilling Go-Karting rides to India’s first
                                'Badminton in the Dark', there’s something for
                                everyone.
                            </p>
                            <p className="flex items-center justify-center md:justify-start flex-col sm:flex-row mt-5">
                                <img src={Rating} alt="Google Review Rating" className="h-5 mr-2"/>
                                <p><span className="hidden sm:inline-block">-</span> Google Review (4.7) .</p>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default About;
