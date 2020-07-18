import React from "react";
import './card-wrapper.sass'
import PropTypes from 'prop-types';
import Typography from "../../../../../components/common/typography/typography";

const CardWrapper = ({firstText, secondText, thirdText , children, className}) => {
    return (
        <div className={`card-wrapper ${className}`}>
            <div className={'card-wrapper__header'}>
                <Typography firstText={firstText} secondText={secondText} before className={'card-wrapper__header__typography'} />
                <span>{thirdText}</span>
            </div>
            <div className={'card-wrapper__body'}>
                {children}
            </div>
        </div>
    )
};

CardWrapper.propTypes = {
    firstText: PropTypes.string,
    secondText: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element,
    thirdText: PropTypes.string,
};

export default CardWrapper
