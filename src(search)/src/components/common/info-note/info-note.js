import React from "react";
import './info-note.sass'
import PropTypes from "prop-types";

const InfoNote = ({text}) => (
    <div className={'info-note'}>
        {text}
    </div>
);

InfoNote.propTypes = {
    text: PropTypes.string,
};

export default InfoNote
