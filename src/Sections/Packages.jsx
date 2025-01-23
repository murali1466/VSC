import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PackageSwiper from "../Components/PackageSwiper/Swiper";
import Button from "../Components/Buttons/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBasketball, faSwimmingPool, faBaseballBatBall, faBaseballBall } from "@fortawesome/free-solid-svg-icons";

function Packages() {
    const location = useLocation();
    const packageRef = useRef(null);

    useEffect(() => {
        if (location.hash === "#packages" && packageRef.current) {
            packageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            ref={packageRef}
            className="font-mplus bg-yellow w-full pt-28 pb-20 px-5 md:px-10"
        >
            <div className="flex items-center justify-center flex-col">
                <div className="w-full 2xl:w-[70rem] relative">
                    <div className="flex items-center justify-center relative z-10">
                        <p className="uppercase text-primary font-bold text-center text-3xl sm:text-4xl">
                            Jaw-Dropping Offers!
                        </p>
                    </div>
                    <div className="mt-6 mb-5 relative z-10">
                        <PackageSwiper />
                    </div>
                    <div className="flex items-center justify-center relative z-10">
                        <Button
                            content={"Explore Mind-Blowing Offers"}
                            link={
                                "https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                            }
                            className={
                                "bg-darkBlue px-5 hover:scale-110 duration-300 ease-out py-2 rounded-full font-light shadow-customShadow text-center text-white"
                            }
                        />
                    </div>
                    <FontAwesomeIcon icon={faBaseballBall} className="text-darkBlue/70 absolute text-[5rem] -top-20"/>
                    <FontAwesomeIcon icon={faBaseballBatBall} className="text-darkBlue/70 absolute text-3xl right-0 bottom-10"/>
                    <FontAwesomeIcon icon={faSwimmingPool} className="text-darkBlue/70 absolute text-5xl -bottom-10 left-[50%]"/>
                    <FontAwesomeIcon icon={faBasketball} className="text-darkBlue/70 absolute text-3xl top-0 right-[20%]"/>
                    <FontAwesomeIcon icon={faCar} className="text-darkBlue/70 absolute text-[3rem] bottom-16 left-[20%]"/>
                </div>
            </div>
        </div>
    );
}

export default Packages;
