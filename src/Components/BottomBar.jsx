import React from "react";
import Tickets from "../assets/svg/ticket.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faTags,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
    return (
        <div className="bg-text p-2 mb-2 flex items-center justify-center rounded-xl gap-2 shadow-customShadow">
            <div>
                <a
                    href="https://maps.app.goo.gl/5rFq3T8XXKWhSMgq9"
                    target="_blank"
                    className="bg-yellow p-2 rounded-xl flex items-center justify-center flex-col gap-1 h-12 w-[4rem]"
                >
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-xl text-darkBlue"
                    />
                    <p className="text-sm font-semibold">Location</p>
                </a>
            </div>
            <div className="bg-darkBlue rounded-xl flex items-center justify-center flex-row">
                <Link
                    to="/#packages"
                    className="p-2 h-12 w-[4rem] flex items-center justify-center flex-col gap-1 border-r border-text/30"
                >
                    <FontAwesomeIcon
                        icon={faTags}
                        className="text-xl text-yellow"
                    />
                    <p className="text-sm text-text">Package</p>
                </Link>
                <a
                    href="https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                    target="_blank"
                    className="p-2 h-12 w-[4rem] flex items-center justify-center flex-col gap-1 border-r border-text/30"
                >
                    <img src={Tickets} alt="Tickets" className="h-[1.3rem]" />
                    <p className="text-sm text-text">Tickets</p>
                </a>
                <a
                    href="tel:+91 8297667878"
                    className="p-2 h-12 w-[4rem] flex items-center justify-center flex-col gap-1"
                >
                    <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="text-xl text-yellow rotate-90"
                    />
                    <p className="text-sm text-text">Contact</p>
                </a>
            </div>
        </div>
    );
}

export default BottomBar;
