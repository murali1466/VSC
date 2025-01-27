import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@mui/material";

function Button({ content, className = "", link = "#" }) {
    const handleClick = () => {
        if (link && /^https?:\/\//.test(link)) {
            window.open(link, "_blank");
        } else {
            console.error("Invalid link provided:", link);
        }
    };

    return (
        <button
            className={`${className} cursor-pointer`}
            onClick={handleClick}
            style={{ background: "white", color: "black", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
            {content}
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    className: PropTypes.string,
    link: PropTypes.string,
};

export default Button;
