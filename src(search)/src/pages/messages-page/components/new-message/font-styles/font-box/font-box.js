import React from "react";
import './font-box.sass'
import PropTypes from "prop-types";


const FontBox = ({img}) => {
    return (
        <div className={'font-box'}>
            <img src={img} alt="style"/>
        </div>
    )
};

FontBox.propTypes = {
    img: PropTypes.string,
};

export default FontBox;
