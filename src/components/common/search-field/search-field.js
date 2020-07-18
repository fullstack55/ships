import React from "react";
import './search-field.sass';
import PropTypes from 'prop-types'
import searchIcon from '../../../assets/images/desktop/support/Search.svg'

const SearchField = ({label, placeholder, className}) => {
    return (
    <div className={`search-field ${className}`}>
        <span className="search-field__label">
          {label}&nbsp;
        </span>
        <div className={'search-field__input-container'}>
            <input
                placeholder={placeholder}
                className="search-field__input"
            />
            <img src={searchIcon} alt=""/>
        </div>
    </div>
    )
};
SearchField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string
}

export default SearchField
