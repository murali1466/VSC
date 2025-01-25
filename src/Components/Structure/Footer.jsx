import React from "react";
import Container from "../Container";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-darkBlue pt-16 pb-20 text-text font-mplus px-10">
            <Container>
				<div className="flex items-start justify-between flex-row flex-wrap gap-10">
					<div className="flex items-start justify-center flex-col font-light gap-5 w-60 sm:w-[20rem]">
						<div className="flex items-center justify-center">
							<img src={Logo} alt="Vishwanadh Sports Club" className="w-[10rem]"/>
						</div>
						<p className="">We dream of creating a world of thrilling experiences that bring endless joy to adventurers of all age groups!</p>
						<div className="text-yellow w-full flex items-center justify-start gap-5 text-3xl">
							<a href="" target="_blank">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="" target="_blank">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="" target="_blank">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
							<a href="" target="_blank">
								<FontAwesomeIcon icon={faWhatsapp} />
							</a>
						</div>
					</div>
					<div>
						<p className="text-2xl font-semibold mb-5">Quick Links</p>
						<div className="font-light">
							<Link to="/" className="block">Home</Link>
							<Link to="/#about" className="block">About</Link>
							<Link to="/#activities" className="block">Facilities & Activities</Link>
							<Link to="/#packages" className="block">Packages</Link>
							<Link to="/Events&Conventions" className="block">Events & Conventions</Link>
							<Link to="/#gallery" className="block">Gallery</Link>
							<Link to="/#FAQ">FAQ's</Link>
							<Link to="/#contact">Contact</Link>
						</div>
					</div>
					<div className="w-60 sm:w-[18rem]">
						<p className="text-2xl font-semibold mb-5">Contact</p>
						<div className="font-light">
							<div className="flex items-start justify-start gap-5">
								<FontAwesomeIcon icon={faLocationDot} className="mt-1"/>
								<a href="https://maps.app.goo.gl/5rFq3T8XXKWhSMgq9" target="_blank">Port Stadium, Akkayyapalem Main Rd, Kailasapuram, Visakhapatnam, Andhra Pradesh 530016</a>
							</div>
							<div className="flex items-start justify-start gap-5">
								<FontAwesomeIcon icon={faMobileAlt} className="mt-1"/>
								<a href="tel:++91 8297667878">+91 8297667878</a>
							</div>
							<div className="flex items-start justify-start gap-5">
								<FontAwesomeIcon icon={faEnvelope} className="mt-1"/>
								<a href="mailto:vishwanadhsportsclub@gmail.com" className="max-w-52">vishwanadhsportsclub @gmail.com</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
        </div>
    );
}

export default Footer;
