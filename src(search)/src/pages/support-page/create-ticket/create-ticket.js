import React from "react";
import './create-ticket.sass';
import PropTypes from 'prop-types';

const CreateTicket = ({label, cta, className}) => {
    return(
        <div className={`create-ticket-container ${className}`}>
            <span>{label}</span>
            <button>{cta}</button>
        </div>
    )
};

CreateTicket.propTypes = {
    label: PropTypes.string,
    cta: PropTypes.string,
    className: PropTypes.string,
};

export default CreateTicket
