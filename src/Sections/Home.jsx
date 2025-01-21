import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import IntroVideo from "../assets/IntroVideo.mp4";
import Container from "../components/Container";
import Button from "../Components/Buttons/LinkButton";
import MarqueeElement from "../Components/MarqueeElement";

import Cycle360 from "../assets/Bookings/360Cycle.jpg";
import AquaWorld from "../assets/Bookings/AquaWorld.jpg";
import Badminton from "../assets/Bookings/Badminton.jpeg";
import GoKarting from "../assets/Bookings/Gokarting.jpg";
import GoKartingChampion from "../assets/Bookings/GokartingChampion.jpeg";
import RopeCourse from "../assets/Bookings/Rope.jpg";

function Home() {
    return (
        <div className="w-full relative h-[40rem]">
            <video
                className="absolute w-full h-[40rem] object-cover"
                src={IntroVideo}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="bg-gradient-to-b from-black/70 via-black/20 to-black/70 w-full h-[40rem] absolute top-0"></div>
            <div className="w-full absolute top-0 left-0 flex items-center justify-center">
                <Container>
                    <div className="px-5 md:px-20 h-[40rem] flex flex-col justify-center">
                        <p className="text-text uppercase font-mplus text-3xl md:text-5xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4rem] font-bold text-center">
                            Vishwanadh's Sports Club Adventure Thrill City
                        </p>
                        <p className="font-mplus font-extralight text-xl text-center text-text mt-5">
                            Your Ultimate Adventure and Sports Destination
                        </p>
                        <div className="flex items-center justify-center flex-row mt-5">
                            <Button
                                content={
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="">Book Now</span>
                                        <span className="">
                                            <FontAwesomeIcon
                                                icon={faTags}
                                                className="text-primary"
                                            />
                                        </span>
                                    </span>
                                }
                                link={
                                    "https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                                }
                                className={
                                    "bg-text text-lg rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"
                                }
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="flex items-center justify-center">
                <div className="absolute -bottom-[7rem] flex items-center justify-center flex-col">
                    <p className="text-text text-xl font-mplus font-semibold mb-5 uppercase">Select your Interest</p>
                    <div className="w-[90vw] xl:w-[65rem]">
                        <Marquee className="w-full lg:w-[50rem] xl:w-[65rem]" pauseOnHover={true} autoFill={true}>
                            <MarqueeElement 
                                content={"360 Cycle"}
                                img={Cycle360}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Aqua World"}
                                img={AquaWorld}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Badminton"}
                                img={Badminton}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Go Karting"}
                                img={GoKarting}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Rope Course"}
                                img={RopeCourse}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Go Karting Champion"}
                                img={GoKartingChampion}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary font-bold shadow-customShadow"}
                            />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
