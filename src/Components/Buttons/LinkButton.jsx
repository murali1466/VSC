import React from "react";
import PropTypes from 'prop-types';

function Button({ content, className, link }) {
    return <p className={`${className} cursor-pointer`} onClick={()=>window.open(link)}>{content}</p>;
}
Button.propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
    link:PropTypes.string,
};

export default Button;
