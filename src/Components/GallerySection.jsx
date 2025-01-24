import React from "react";
import Image1 from "../assets/Gallery/Image1.jpg";
import Image2 from "../assets/Gallery/Image2.jpg";
import Image3 from "../assets/Gallery/Image3.jpg";
import Image4 from "../assets/Gallery/Image4.jpg";
import Image5 from "../assets/Gallery/Image5.jpg";
import Image6 from "../assets/Gallery/Image6.jpg";
import Image7 from "../assets/Gallery/Image7.jpg";
import Image8 from "../assets/Gallery/Image8.jpg";
import Image9 from "../assets/Gallery/Image9.jpg";

function GallerySection() {
    return (
        <div className="flex items-center justify-center flex-col gap-2 md:gap-4 w-full">
            <div className="flex items-center justify-center flex-row gap-2 md:gap-4 w-full">
                <div className="flex items-center justify-center flex-col gap-2 md:gap-4 w-full sm:w-[14rem] md:w-[16rem] lg:w-[13rem] xl:w-[15rem]">
                    <img src={Image1} alt="Gallery Image" className="rounded-xl h-[15.25rem] w-full lg:w-[13rem] xl:h-[15.25rem] xl:w-[15rem] object-cover" />
                    <img src={Image2} alt="Gallery Image" className="rounded-xl h-[8.75rem] w-full lg:w-[13rem] xl:h-[8.75rem] xl:w-[15rem] object-cover" />
                </div>
                <div className="hidden lg:flex items-center justify-center flex-col gap-2 md:gap-4">
                    <div>
                        <img src={Image3} alt="Gallery Image" className="rounded-xl h-[12rem] w-[33rem] xl:h-[12rem] xl:w-[33rem] object-cover"/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-2 md:gap-4 w-[33rem]">
                        <img src={Image4} alt="Gallery Image" className={`rounded-xl h-[12rem] w-[16rem] xl:h-[12rem] xl:w-[16rem] object-cover`}/>
                        <img src={Image5} alt="Gallery Image" className={`rounded-xl h-[12rem] w-[16rem] xl:h-[12rem] xl:w-[16rem] object-cover`}/>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2 md:gap-4 w-full sm:w-[14rem] md:w-[16rem] lg:w-[13rem] xl:w-[15rem]">
                    <img src={Image6} alt="Gallery Image" className="rounded-xl h-[8.75rem] w-full lg:w-[13rem] xl:h-[8.75rem] xl:w-[15rem] object-cover"/>
                    <img src={Image7} alt="Gallery Image" className="rounded-xl h-[15.25rem] w-full lg:w-[13rem] xl:h-[15.25rem] xl:w-[15rem] object-cover"/>
                </div>
            </div>
            <div className="w-full sm:w-[28rem] flex items-center justify-center">
                <div className="flex lg:hidden items-center justify-center flex-col gap-2 md:gap-4 w-full md:w-[33rem]">
                    <div className="w-full">
                        <img src={Image3} alt="Gallery Image" className="rounded-xl h-[12rem] w-full md:w-[33rem] xl:h-[12rem] xl:w-[33rem] object-cover"/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-2 md:gap-4 w-full md:w-[33rem]">
                        <img src={Image4} alt="Gallery Image" className={`rounded-xl h-[12rem] w-[49%] md:w-[16rem] xl:h-[12rem] xl:w-[16rem] object-cover`}/>
                        <img src={Image5} alt="Gallery Image" className={`rounded-xl h-[12rem] w-[49%] md:w-[16rem] xl:h-[12rem] xl:w-[16rem] object-cover`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;
