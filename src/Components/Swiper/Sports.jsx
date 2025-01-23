import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

// import required modules
import { Pagination } from "swiper/modules";
import BoxCricket from "../../assets/Activities/Sports/BoxCricket.jpg";
import Badminton from "../../assets/Bookings/Badminton.jpeg";
import IndoorStadium from "../../assets/Activities/Sports/IndoorStadium.jpg";
import BasketBall from "../../assets/Activities/Sports/BasketBall.jpg";
import Hockey from "../../assets/Activities/Sports/Hockey.jpg";

function SportsSwiper() {
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
                        Activity="Box Cricket"
                        Description="Fast-paced cricket games in thrilling arenas."
                        Image={BoxCricket}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Badminton"
                        Description="Professional courts for badminton enthusiasts and champions."
                        Image={Badminton}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Indoor Stadium"
                        Description="State-of-the-art indoor facilities for every sport."
                        Image={IndoorStadium}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Basket Ball"
                        Description="Perfect courts for thrilling basketball matches."
                        Image={BasketBall}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Activity="Hockey"
                        Description="Unleash skills on expertly designed hockey fields."
                        Image={Hockey}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SportsSwiper;
