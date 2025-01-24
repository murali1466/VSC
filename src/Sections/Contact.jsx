import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../Components/Container";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "../Components/loader.css";

function Contact() {
    const contactSection = useRef(null);
    const location = useLocation();
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: "",
        Subject: "",
        Body: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (location.hash === "#contact" && contactSection.current) {
            contactSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: details.name,
            email: details.email,
            toMail: "srkengineering@yahoo.co.in",
            toName: "Sree Rama Krishna Engineering Company",
            phone: details.number,
            subject: details.Subject, // Include inquiryType in subject
            message: details.Body,
        };
        axios
            .post("https://api.qrdcard.com/api/url/sendmail", data)
            .then((res) => {
                if (res) {
                    alert("Form Submitted Successfully");
                    setDetails({
                        details,
                        name: "",
                        email: "",
                        number: "",
                        Subject: "",
                        Body: "",
                    });
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(details);
    };

    return (
        <div
            ref={contactSection}
            className="font-mplus flex items-cener justify-center pt-28 pb-20 sm:px-5 md:px-10"
        >
            <div className="w-full lg:w-[50rem] flex items-center justify-center ">    
                <div className="bg-secondary w-full flex items-center justify-between flex-col sm:flex-row gap-5 p-5 py-10 rounded-xl shadow-customShadow">
                    <div className="ml-5 sm:w-[17rem] lg:w-[20rem] xl:w-auto">
                        <p className="font-bold text-4xl sm:text-3xl lg:text-4xl text-darkBlue mb-5">
                            Want to know more?
                        </p>
                        <p className="text-xl">
                            Reach out to us for inquiries, bookings, or more
                            details!
                        </p>
                        <div className="w-60 sm:w-[18rem] mt-5">
                            <div className="font-light">
                                <div className="flex items-start justify-start gap-5">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="mt-1"
                                    />
                                    <a
                                        href="https://maps.app.goo.gl/5rFq3T8XXKWhSMgq9"
                                        target="_blank"
                                    >
                                        Port Stadium, Akkayyapalem Main Rd,
                                        Kailasapuram, Visakhapatnam, Andhra
                                        Pradesh 530016
                                    </a>
                                </div>
                                <div className="flex items-start justify-start gap-5">
                                    <FontAwesomeIcon
                                        icon={faMobileAlt}
                                        className="mt-1"
                                    />
                                    <a href="tel:++91 8297667878">
                                        +91 8297667878
                                    </a>
                                </div>
                                <div className="flex items-start justify-start gap-5">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="mt-1"
                                    />
                                    <a
                                        href="mailto:vishwanadhsportsclub@gmail.com"
                                        className="max-w-52"
                                    >
                                        vishwanadhsportsclub @gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-text px-5 ${window.innerWidth < 350?"w-full":"w-72"} sm:w-[50%] lg:px-10 py-5 rounded-xl`}>
                        <form action="" onSubmit={handleSubmit}>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-full"
                                        : "w-full"
                                } sm:w-[100%] lg:w-72 my-2`}
                            >
                                <p className="font-semibold text-lg">
                                    Name <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={details.name}
                                    required
                                    name="name"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            name: e.target.value,
                                        });
                                    }}
                                    className="border border-primary outline-none bg-white shadow-md shadow-slate-400 rounded-lg w-full px-2 py-1 text-slate-900"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-full"
                                        : "w-full"
                                } sm:w-[100%] lg:w-72 my-2`}
                            >
                                <p className="font-semibold text-lg">
                                    Email{" "}
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={details.email}
                                    required
                                    name="email"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            email: e.target.value,
                                        });
                                    }}
                                    className="border border-primary outline-none bg-white shadow-md shadow-slate-400 rounded-lg w-full px-2 py-1 text-slate-900"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-full"
                                        : "w-full"
                                } sm:w-[100%] lg:w-72 my-2`}
                            >
                                <p className="font-semibold text-lg">
                                    Mobile Number{" "}
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    placeholder="Your mobile number"
                                    value={details.number}
                                    required
                                    name="mobile"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            number: e.target.value,
                                        });
                                    }}
                                    className="border border-primary outline-none bg-white shadow-md shadow-slate-400 rounded-lg w-full px-2 py-1 text-slate-900"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-full"
                                        : "w-full"
                                } sm:w-[100%] lg:w-72 my-2`}
                            >
                                <p className="font-semibold text-lg">
                                    Subject
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    value={details.Subject}
                                    name="country"
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            Subject: e.target.value,
                                        });
                                    }}
                                    className="border border-primary outline-none bg-white shadow-md shadow-slate-400 rounded-lg w-full px-2 py-1 text-slate-900"
                                />
                            </div>
                            <div
                                className={`${
                                    window.innerWidth < 350
                                        ? "w-full"
                                        : "w-full"
                                } sm:w-[100%] lg:w-72 my-2`}
                            >
                                <p className="font-semibold text-lg">
                                    Message
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="Your Message"
                                    name="body"
                                    value={details.Body}
                                    onChange={(e) => {
                                        setDetails({
                                            ...details,
                                            Body: e.target.value,
                                        });
                                    }}
                                    className="border border-primary outline-none bg-white shadow-md shadow-slate-400 rounded-lg w-full px-2 py-1 text-slate-900"
                                />
                            </div>
                            <div className="flex justify-center mt-5">
                                {
                                    loading?
                                    <div className="w-20 h-8 rounded bg-darkBlue flex items-center justify-center shadow-md shadow-slate-400">
                                        <div
                                            className="loader"
                                        />
                                    </div>
                                    :
                                    <button
                                        type="submit"
                                        className="bg-darkBlue rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300"
                                    >
                                        Submit
                                    </button>
                                }
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
