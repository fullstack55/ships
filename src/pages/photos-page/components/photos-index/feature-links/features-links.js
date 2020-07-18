import React from "react";
import './features-links.sass';
import PropTypes from 'prop-types';
import Typography from "../../../../../components/common/typography/typography";

const FeaturesLinks = ({firstText, secondText, links}) => {
    return(
        <div className={'feature-links'}>
            <Typography firstText={firstText} secondText={secondText} className={'feature-links__typography'} />
            <div className={'feature-links__container'}>
                {
                    links.map((column,index) => <div key={index} className={'feature-links__container__column'}>
                        {column.map((link,index) => <span
                            key={index}
                            className={'feature-links__container__column__link'}>
                            {link}
                        </span>)}
                    </div>)
                }
            </div>
        </div>
    )
};
FeaturesLinks.propTypes = {
    firstText: PropTypes.string,
    secondText:PropTypes.string,
    links:PropTypes.array,
};
export default FeaturesLinks;
