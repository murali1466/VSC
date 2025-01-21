import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faInfoCircle,
    faCogs,
    faTags,
    faHandshake,
    faImages,
    faQuestionCircle,
    faPhoneAlt,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";
import Button from "../Buttons/LinkButton";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    return (
        <div className="fixed w-full z-20 flex items-center justify-between">
            <div className="flex items-center justify-between w-full mt-4 mx-2 sm:mx-5 bg-black/40 backdrop-blur rounded-2xl shadow-customShadow">
                <div
                    className="ml-5 sm:ml-10 bg-text rounded-full flex items-center justify-center shadow-md shadow-black/30 p-2 hover:p-3 hover:-mr-2 duration-150 transition-all ease-out "
                    onClick={handleMenu}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="w-4 h-4 text-primary"
                    />
                </div>
                <div>
                    <img
                        src={Logo}
                        alt="Vishwanadh Sports Club"
                        className="w-20 p-1"
                    />
                </div>
                <div className="mr-5">
                    <Button
                        className={
                            "bg-text rounded-lg px-3 py-1 pb-1.5 text-primary font-semibold shadow-customShadow"
                        }
                        link={
                            "https://in.bookmyshow.com/venue/vishwanadh-sports-clubport-stadium-visakhapatnam/VSCV"
                        }
                        content={
                            <span className="inline-block">
                                <span className="hidden sm:block">
                                    Book Now
                                </span>
                                <span className="block sm:hidden">
                                    <FontAwesomeIcon
                                        icon={faTags}
                                        className="text-primary"
                                    />
                                </span>
                            </span>
                        }
                    />
                </div>
            </div>
            <div
                className={`absolute bg-white h-screen w-screen px-3 sm:w-max top-0 ${
                    menu ? "left-0" : "-left-full sm:-left-96"
                } duration-500 flex items-start justify-start flex-col`}
                style={{ boxShadow: "0px 5px 20px rgba(0,0,0,0.3)" }}
            >
                <div className="relative w-full h-screen">
                    <div
                        className="shadow-md shadow-black/20 flex items-center justify-center cursor-pointer rounded-full absolute right-3 top-6 hover:right-2 hover:top-5 p-1 hover:p-2 duration-150 transition-all ease-out border border-secondary"
                        onClick={handleMenu}
                    >
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="h-5 w-5 text-primary"
                        />
                    </div>
                    <div className="mt-10 flex items-center justify-center flex-row">
                        <div className="">
                            <img
                                src={Logo}
                                alt="Vishwanadh Sports Club"
                                className="w-20"
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto h-[80%] mt-5">
                        <Link
                            onClick={handleMenu}
                            to="/"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faHome}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Home
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/#about"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            About
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/Facilities&Activities"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faCogs}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Facilities & Activities
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/#packages"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faTags}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Packages
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/Events&Conventions"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faHandshake}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Events & Conventions
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/#gallery"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faImages}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Gallery
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/#FAQ"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            FAQs
                        </Link>
                        <Link
                            onClick={handleMenu}
                            to="/#contact"
                            className="border-b border-slate-300 group hover:text-primary font-semibold text-primary font-mplus w-full hover:bg-secondary duration-300 flex items-center justify-start gap-4 p-3 flex-row"
                        >
                            <FontAwesomeIcon
                                icon={faPhoneAlt}
                                className="text-primary text-2xl w-9 duration-300"
                            />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
