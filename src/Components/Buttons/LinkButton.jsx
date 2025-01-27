import React from "react";
import PropTypes from "prop-types";

function Button({ content, className, link }) {
    return (
        <button
            className={`${className} cursor-pointer`}
            onClick={() => {
                window.open(link);
            }}
        >
            {content}
        </button>
    );
}
// Button.propTypes = {
//     content: PropTypes.object.isRequired || PropTypes.string.isRequired,
//     className: PropTypes.string,
//     link: PropTypes.string,
// };

export default Button;
