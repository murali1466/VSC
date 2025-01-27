import React from "react";
import PropTypes from "prop-types";
import { Button as LinkButton } from "@mui/material";

function Button({ content, className, link }) {
    return (
        <button
            className={`${className} cursor-pointer`}
            onClick={() => {
                window.open(link,"_blank");
            }}
        >
            {content}
        </button>
        // <LinkButton
        //     className={`${className} cursor-pointer`}
        //     variant="normal"
        //     sx={{background:"White",color:"black"}}
        //     onClick={() => {
        //         window.open(link,"_blank");
        //     }}
        // >
        //     {content}
        // </LinkButton>
    );
}
// Button.propTypes = {
//     content: PropTypes.object.isRequired || PropTypes.string.isRequired,
//     className: PropTypes.string,
//     link: PropTypes.string,
// };

export default Button;
