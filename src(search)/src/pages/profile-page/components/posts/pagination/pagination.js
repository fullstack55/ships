import React from "react";
import PropTypes from "prop-types";
import './pagination.sass'


const Pagintation = ({totalPages}) => {
    return (
        <div className={'pagination'}>
            <span>1</span>
            <span className={'pagination__selected'}>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            ...
            <span>{totalPages}</span>
        </div>
    )
};

Pagintation.propTypes = {
    totalPages: PropTypes.number,
};
export default Pagintation
