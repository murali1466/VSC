import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

// import required modules
import { Pagination } from "swiper/modules";
import Cycle360 from "../../assets/Packages/360Cycle.jpg";
import AquaPark from "../../assets/Packages/AquaPark.jpg";
import Badminton from "../../assets/Packages/Badminton.jpg";
import Champion from "../../assets/Packages/Champion.jpg";
import GiantSwing from "../../assets/Packages/GiantSwing.jpg";
import GoKarting from "../../assets/Packages/GoKarting.jpg";
import Rocket from "../../assets/Packages/Rocket.jpg";
import RopeCourse from "../../assets/Packages/RopeCourse.jpg";
import Swimming from "../../assets/Packages/SwimmingPool.jpg";

function SportsSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={
                    window.innerWidth < 1024
                        ? window.innerWidth < 640
                            ? 1
                            : 2
                        : 3
                }
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full sm:w-[90vw] lg:w-[50rem]"
            >
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"
                        Image={Cycle360}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/sports/aqua-world-swimming-pool-vsc/ET00389705"
                        Image={Swimming}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/activities/aqua-world-water-park-at-adventure-thrill-city-vsc/ET00428490"
                        Image={AquaPark}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/sports/badminton-vsc/ET00390299"
                        Image={Badminton}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/sports/gokarting-championship-vsc/ET00379295"
                        Image={Champion}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/activities/giant-swing-vsc/ET00389962"
                        Image={GiantSwing}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/activities/gokarting-vizag-vishwanadh-sports-club/ET00376476"
                        Image={GoKarting}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/activities/rocket-ejector-vsc/ET00389961"
                        Image={Rocket}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        Link="https://in.bookmyshow.com/activities/rope-course-at-adventure-thrill-city-vsc/ET00428598"
                        Image={RopeCourse}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SportsSwiper;
