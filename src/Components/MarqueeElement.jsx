import React from "react";
import PropTypes from "prop-types";
import Button from "./Buttons/LinkButton";

function MarqueeElement({img,content, className, link}) {
    return (
        <>
            <div className="overflow-hidden relative group mx-2 rounded-lg w-32 sm:w-40 flex items-start justify-center flex-col">
                <img src={img} alt="Marquee Element Image" className="rounded-lg"/>
                <div className="flex items-center justify-center flex-col absolute bottom-0 z-10 bg-gradient-to-b from-black/0 to-black/80 w-full h-16 transition-all duration-500">
                    <Button content={"Book Now"} className={className} link={link} />
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <a target="_blank" href={link} className="text-text text-sm sm:text-base font-semibold font-mplus mt-2 text-center">{content}</a>
            </div>
        </>
    );
}

MarqueeElement.propTypes = {
    img: PropTypes.string,
    content: PropTypes.string,
    className:PropTypes.string,
    link:PropTypes.string,
}

export default MarqueeElement;
