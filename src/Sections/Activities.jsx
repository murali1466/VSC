import React, { useState, useEffect, useRef } from "react";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
    faMedal,
    faBaseballBatBall,
    faBasketball,
} from "@fortawesome/free-solid-svg-icons";
import { faVideo, faBicycle } from "@fortawesome/free-solid-svg-icons";

import Adventure from "../assets/Activities/adventure.jpeg";
import Sports from "../assets/Activities/sports.jpg";
import ActivitiesSwiper from "../Components/Swiper/Adventures";
import SportsSwiper from "../Components/Swiper/Sports";

function Activities() {
    const location = useLocation();
    const activitiesRef = useRef(null);
    const [inView, setInView] = useState("AT");

    useEffect(() => {
        if (location.hash === "#activities" && activitiesRef.current) {
            activitiesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div ref={activitiesRef} className="font-mplus pt-28 pb-16">
            <div className="flex items-center text-center w-full justify-center text-primary font-bold uppercase text-4xl md:text-5xl">
                Facilities & Activities
            </div>
            <Container>
                <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
                    <div
                        onClick={() => {
                            setInView("AT");
                        }}
                        className={`group cursor-pointer ${
                            window.innerWidth < 500 ? "w-[90vw]" : "w-56"
                        } h-36 hover:border-secondary hover:border-2 ${
                            inView === "AT"
                                ? "border-secondary border-2"
                                : "border border-primary"
                        } rounded-xl relative overflow-hidden flex items-center justify-start p-5 flex-col`}
                    >
                        <img
                            src={Adventure}
                            alt="Adventures and Entertainment"
                            className={`${
                                window.innerWidth < 500 ? "w-[90vw]" : "w-56"
                            } group-hover:scale-125 group-hover:opacity-80 ${
                                inView === "AT"
                                    ? "scale-125 opacity-80"
                                    : "scale-100 opacity-35 "
                            } object-cover rounded-xl absolute top-0 left-0 transition-all duration-300`}
                        />
                        <FontAwesomeIcon
                            icon={faVideo}
                            className={`text-primary group-hover:text-primary absolute text-[5rem] group-hover:-bottom-5 group-hover:-left-10 ${
                                inView === "AT"
                                    ? "-bottom-5 -left-10"
                                    : " -bottom-3 -left-8"
                            } transition-all duration-300`}
                        />
                        <FontAwesomeIcon
                            icon={faBicycle}
                            className={`text-darkBlue absolute text-3xl group-hover:-right-4 ${
                                inView === "AT" ? "-right-4" : "-right-2"
                            } bottom-[10%] transition-all duration-300`}
                        />
                        <div
                            className={`absolute group-hover:bottom-0 ${
                                inView === "AT" ? "bottom-0" : "-bottom-[120%]"
                            } h-[120%] w-full bg-gradient-to-b from-black/0 to-black/80 transition-all duration-300`}
                        ></div>
                        <p
                            className={`relative px-5 text-center group-hover:text-yellow ${
                                inView === "AT" ? "text-yellow" : "text-black"
                            } uppercase font-bold flex items-center justify-center flex-col transition-all duration-300`}
                        >
                            <span className="">
                                <span className="text-3xl">A</span>dventures
                            </span>{" "}
                            <span className="leading-3">&</span>{" "}
                            <span className="">
                                Entertainmen<span className="text-3xl">T</span>
                            </span>
                        </p>
                    </div>
                    <div
                        onClick={() => {
                            setInView("SE");
                        }}
                        className={`group cursor-pointer h-36 ${
                            window.innerWidth < 500 ? "w-[90vw]" : "w-56"
                        } hover:border-secondary hover:border-2 ${
                            inView === "SE"
                                ? "border-secondary border-2"
                                : "border border-primary"
                        } rounded-xl relative overflow-hidden flex items-center justify-start p-5 flex-col`}
                    >
                        <img
                            src={Sports}
                            alt="Adventures and Entertainment"
                            className={`${
                                window.innerWidth < 500 ? "w-[90vw]" : "w-56"
                            } group-hover:scale-125 group-hover:opacity-80 ${
                                inView === "SE"
                                    ? "scale-125 opacity-80"
                                    : "scale-100 opacity-35 "
                            } object-cover object-bottom rounded-xl absolute top-0 left-0 transition-all duration-300`}
                        />
                        <FontAwesomeIcon
                            icon={faBasketball}
                            className={`text-primary group-hover:text-primary absolute text-[5rem] group-hover:-bottom-5 group-hover:-left-10 ${
                                inView === "SE"
                                    ? "-bottom-5 -left-10"
                                    : " -bottom-3 -left-8"
                            } transition-all duration-300`}
                        />
                        <FontAwesomeIcon
                            icon={faMedal}
                            className={`text-darkBlue absolute text-3xl group-hover:-right-4 ${
                                inView === "SE" ? "-right-4" : "-right-2"
                            } bottom-[10%] transition-all duration-300`}
                        />
                        <div
                            className={`absolute group-hover:bottom-0 ${
                                inView === "SE" ? "bottom-0" : "-bottom-[120%]"
                            } h-[120%] w-full bg-gradient-to-b from-black/0 to-black/80 transition-all duration-300`}
                        ></div>
                        <p
                            className={`relative px-5 text-center group-hover:text-yellow ${
                                inView === "SE" ? "text-yellow" : "text-black"
                            } uppercase font-bold flex items-center justify-center flex-col transition-all duration-300`}
                        >
                            <span className="">
                                <span className="text-3xl">S</span>ports
                            </span>{" "}
                            <span className="leading-3">&</span>
                            <span className="">
                                Leisur<span className="text-3xl">e</span>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="mt-10 px-5 sm:px-10 relative">
                    {
                        inView ==="AT"&&
                        <>
                            <ActivitiesSwiper /> 
                            {/* <FontAwesomeIcon icon={faVideo} /> */}
                        </>
                    }
                    {
                        inView ==="SE"&&
                        <>
                            <SportsSwiper /> 
                        </>
                    }
                </div>
            </Container>
        </div>
    );
}

export default Activities;
