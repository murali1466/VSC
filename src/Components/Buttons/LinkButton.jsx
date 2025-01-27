import React from "react";
import PropTypes from "prop-types";

function Button({ content, className = "", link = "#" }) {
    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleClick = () => {
        if (link && isValidURL(link)) {
            window.open(link, "_blank", "noopener,noreferrer");
        } else {
            console.error("Invalid link provided:", link);
        }
    };

    return (
        <button
            className={`${className} cursor-pointer`}
            onClick={handleClick}
            style={{
                background: "white",
                color: "black",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
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
