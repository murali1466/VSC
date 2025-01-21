import React from "react";
import PropTypes from "prop-types";
import Button from "./Buttons/LinkButton";

function MarqueeElement({img,content, className, link}) {
    return (
        <div className="overflow-hidden relative group mx-2 rounded-lg w-32 sm:w-40">
            <img src={img} alt="Marquee Element Image" className="rounded-lg"/>
            <div className="flex items-center justify-center flex-col absolute top-full group-hover:top-0 z-10 bg-gradient-to-b from-black/0 to-black/80 w-full h-full transition-all duration-500">
                <Button content={"Book Now"} className={className} link={link} />
                <p className="text-text font-semibold font-mplus mt-2 text-center">{content}</p>
            </div>
        </div>
    );
}

MarqueeElement.propTypes = {
    img: PropTypes.string,
    content: PropTypes.string,
}

export default MarqueeElement;
