import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
    const [state, setState] = React.useState("");
    const location = useLocation();
    const faqRef = React.useRef(null);

    const handleState = (questionNumber) => {
        setState((prev)=> prev === questionNumber ? "" : questionNumber);
        console.log(state);
    };

    React.useEffect(() => {
        if (location.hash === "#FAQ" && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            ref={faqRef}
            className="bg-darkBlue font-mplus flex items-center justify-center px-5 sm:px-10 pt-28 pb-20"
        >
            <Container>
                <div>
                    <div className="hidden">
                        <input
                            type="radio"
                            name="question"
                            id="one"
                            onClick={() => {
                                handleState("one");
                            }}
                        />
                        <input
                            type="radio"
                            name="question"
                            id="two"
                            onClick={() => {
                                handleState("two");
                            }}
                        />
                        <input
                            type="radio"
                            name="question"
                            id="three"
                            onClick={() => {
                                handleState("three");
                            }}
                        />
                    </div>
                    <div className="mb-10 text-center">
                        <p className="font-semibold text-yellow text-3xl md:text-4xl">FAQ's</p>
                    </div>
                    <div>
                        <div>
                            <label
                                htmlFor="one"
                                className={`cursor-pointer py-3 ${
                                    state === "one"
                                        ? "bg-yellow font-semibold"
                                        : "bg-text font-medium"
                                } text-primary px-5 rounded-md flex items-center justify-between transition-all duration-300`}
                            >
                                <div>
                                    What are the operating hours of Vishwanadh
                                    Sports Club?
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`${
                                            state === "one"
                                                ? "-rotate-180"
                                                : "rotate-0"
                                        } transition-all duration-300`}
                                    />
                                </div>
                            </label>
                            <div
                                className={`overflow-hidden px-5 ${
                                    state === "one"
                                        ? "max-h-96 py-5"
                                        : "max-h-0 py-0"
                                } transition-all duration-300 text-text font-extralight`}
                            >
                                We are open from 9:00 AM to 9:00 PM, seven days
                                a week.
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="two"
                                className={`cursor-pointer py-3 mt-5 ${
                                    state === "two"
                                        ? "bg-yellow font-semibold"
                                        : "bg-text font-medium"
                                } text-primary px-5 rounded-md flex items-center justify-between transition-all duration-300`}
                            >
                                <div>
                                    Is pre-booking required for adventure rides?
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`${
                                            state === "two"
                                                ? "-rotate-180"
                                                : "rotate-0"
                                        } transition-all duration-300`}
                                    />
                                </div>
                            </label>
                            <div
                                className={`overflow-hidden px-5 ${
                                    state === "two"
                                        ? "max-h-96 py-5"
                                        : "max-h-0 py-0"
                                } transition-all duration-300 text-text font-extralight`}
                            >
                                Pre-booking is recommended for weekends and
                                holidays to avoid queues.
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="three"
                                className={`cursor-pointer py-3 mt-5 ${
                                    state === "three"
                                        ? "bg-yellow font-semibold"
                                        : "bg-text font-medium"
                                } text-primary px-5 rounded-md flex items-center justify-between transition-all duration-300`}
                            >
                                <div>
                                    Are there facilities for kids at the club?
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`${
                                            state === "three"
                                                ? "-rotate-180"
                                                : "rotate-0"
                                        } transition-all duration-300`}
                                    />
                                </div>
                            </label>
                            <div
                                className={`overflow-hidden px-5 ${
                                    state === "three"
                                        ? "max-h-96 py-5"
                                        : "max-h-0 py-0"
                                } transition-all duration-300 text-text font-extralight`}
                            >
                                Absolutely! We offer a variety of kid-friendly
                                activities, including soft play areas, rope
                                courses, and a snow zone.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FAQ;
