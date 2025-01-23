import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PackageSwiper from "../Components/PackageSwiper/Swiper";
import Button from "../Components/Buttons/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                    <div className="flex items-center justify-center">
                        <p className="uppercase text-primary font-bold text-center text-3xl sm:text-4xl">
                            Jaw-Dropping Offers!
                        </p>
                    </div>
                    <div className="mt-6 mb-5">
                        <PackageSwiper />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            content={"Explore Mind-Blowing Offers"}
                            link={
                                "https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                            }
                            className={
                                "bg-darkBlue px-5 hover:scale-110 duration-300 ease-out py-1 rounded-full font-light shadow-customShadow text-white"
                            }
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Packages;
