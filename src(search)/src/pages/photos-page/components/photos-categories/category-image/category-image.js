import React from "react";
import './category-image.sass';
import PropTypes from 'prop-types';

const CategoryImage = ({src,title}) => {
    return(
        <div className={'category-image'}>
            <img src={src} alt="ship"/>
            <p>{title}</p>
        </div>
    )
};

CategoryImage.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
};

export default CategoryImage;
