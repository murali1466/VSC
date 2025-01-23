import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

// import required modules
import { Pagination } from "swiper/modules";
import GoKarting from "../../assets/Bookings/Gokarting.jpg";
import Ziplines from "../../assets/Bookings/Rope.jpg";
import GokartingChampion from "../../assets/Bookings/GokartingChampion.jpeg";
import Aqua from "../../assets/Bookings/AquaWorld.jpg";
import Cycle360 from "../../assets/Bookings/360Cycle.jpg";
import BullRide from "../../assets/Activities/Entertainment/Bull.jpg";
import D12 from "../../assets/Activities/Entertainment/12d.jpg";
import Laser from "../../assets/Activities/Entertainment/LaserWars.jpg";
import Trampoline from "../../assets/Activities/Entertainment/Trampoline.jpg";
import Restaurant from "../../assets/Activities/Entertainment/Restaurant.jpg";
import Studio from "../../assets/Activities/Entertainment/Studio.jpg";
import Kids from "../../assets/Activities/Entertainment/KidsSection.jpg";

function ActivitiesSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={
                    window.innerWidth < 560
                        ? 2
                        : window.innerWidth < 1024
                        ? 3
                        : 4
                }
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full sm:w-[90vw] lg:w-[50rem]"
            >
                <SwiperSlide>
                    <SwiperCard
                        Activity="Go Karting"
                        Description="Speed through thrilling, adrenaline-pumping tracks."
                        Image={GoKarting}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Zip Lines"
                        Description="Glide through breathtaking aerial views seamlessly."
                        Image={Ziplines}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="ChampionShip"
                        Description="Experience heart-racing excitement like never before."
                        Image={GokartingChampion}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Aquaworld"
                        Description="Cool off with endless water adventures."
                        Image={Aqua}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="360 Cycle"
                        Description="Unique and adventurous cycle ride experience."
                        Image={Cycle360}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Bull Rides"
                        Description="Test your endurance on thrilling bull rides."
                        Image={BullRide}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="12D Theater"
                        Description="Immersive cinematic entertainment beyond your imagination."
                        Image={D12}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Laser Wars"
                        Description="Engage in thrilling laser combat excitement."
                        Image={Laser}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Trampoline"
                        Description="Bounce, flip, and soar to endless fun."
                        Image={Trampoline}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Restaurant"
                        Description="Savor exquisite meals in vibrant dining ambiance."
                        Image={Restaurant}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Photo Studio"
                        Description="Capture magical moments with creative photo setups."
                        Image={Studio}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Kids Section"
                        Description="Safe, engaging adventures for young explorers."
                        Image={Kids}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ActivitiesSwiper;
