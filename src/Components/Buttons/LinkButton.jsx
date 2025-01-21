import React from "react";
import PropTypes from 'prop-types';

function Button({ content, className, link }) {
    return <a href={link} target="_blank" className={className}>{content}</a>;
}
Button.propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
    link:PropTypes.string,
};

export default Button;
