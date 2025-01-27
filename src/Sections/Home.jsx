import React,{useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import IntroVideo from "../assets/IntroVideo.mp4";
import Thumbnail from "../assets/VideoThumbnail.svg";
import Container from "../Components/Container";
import Button from "../Components/Buttons/LinkButton";
import MarqueeElement from "../Components/MarqueeElement";

import Cycle360 from "../assets/Bookings/360Cycle.jpg";
import AquaWorld from "../assets/Bookings/AquaWorld.jpg";
import Badminton from "../assets/Bookings/Badminton.jpeg";
import GoKarting from "../assets/Bookings/Gokarting.jpg";
import GoKartingChampion from "../assets/Bookings/GokartingChampion.jpeg";
import RopeCourse from "../assets/Bookings/Rope.jpg";

import Logo from "../assets/logo.png";
import Name from "../assets/AdevturesName.svg";

function Home() {
    const homeRef = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/" && homeRef.current){
            homeRef.current.scrollIntoView({behavior: "smooth"});
        }
    },[location]);

    return (
        <div ref={homeRef} className="w-full relative h-[40rem]">
            <video
                className="absolute w-full h-[40rem] object-cover"
                src={IntroVideo}
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={Thumbnail}
            />
            <div className="bg-gradient-to-b from-black/70 via-black/20 to-black/70 w-full h-[40rem] absolute top-0"></div>
            <div className="w-full absolute top-0 left-0 flex items-center justify-center">
                <Container>
                    <div className="px-5 md:px-20 h-[40rem] flex flex-col justify-center">
                        {/* <p className="text-text uppercase font-mplus text-3xl md:text-5xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4rem] font-bold text-center">
                            Vishwanadh's Sports Club Adventure Thrill City
                        </p> */}
                        <div className="flex items-center justify-center flex-col">
                            <img src={Logo} alt="Vishwanadh Sports Club" className="h-12 mb-2" style={{filter:"drop-shadow(0px 0px 5px rgba(0,0,0))"}}/>
                            <img src={Name} alt="Adventures and Thrills" className="w-60" style={{filter:"drop-shadow(0px 0px 5px rgba(0,0,255,0.7))"}}/>
                            
                        </div>
                        <p className="font-mplus font-extralight text-xl text-center text-text">
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

                                link="https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                                className={
                                    "bg-text text-lg rounded-lg px-3 py-1 text-primary hover:scale-110 duration-150 transition-all ease-out font-bold shadow-customShadow"
                                }
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="flex items-center justify-center">
                <div className="absolute -bottom-[10rem] flex items-center justify-center flex-col">
                    <p className="text-text text-xl font-mplus font-semibold mb-5 uppercase">Select your Interest</p>
                    <div className="w-[90vw] xl:w-[70rem]">
                        <Marquee className="rounded-2xl" speed={80} pauseOnHover={true} autoFill={true}>
                            <MarqueeElement 
                                content={"360 Cycle"}
                                img={Cycle360}
                                link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Aqua World"}
                                img={AquaWorld}
                                link={"https://in.bookmyshow.com/sports/aqua-world-swimming-pool-vsc/ET00389705"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Badminton"}
                                img={Badminton}
                                link={"https://in.bookmyshow.com/sports/badminton-vsc/ET00390299"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={<p>Go&nbsp;Karting</p>}
                                img={GoKarting}
                                link={"https://in.bookmyshow.com/activities/gokarting-vizag-vishwanadh-sports-club/ET00376476"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={"Rope Course"}
                                img={RopeCourse}
                                link={"https://in.bookmyshow.com/activities/rope-course-at-adventure-thrill-city-vsc/ET00428598"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                            <MarqueeElement 
                                content={<p>Go&nbsp;Karting Champion</p>}
                                img={GoKartingChampion}
                                link={"https://in.bookmyshow.com/sports/gokarting-championship-vsc/ET00379295"}
                                className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                            />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
