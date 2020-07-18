import React, {useState} from "react";
import './select.sass';
import PropTypes from "prop-types";


const Select = ({options}) => {
    const [value, setValue] = useState(options[0].value);
    const handleChange = (event) => {
        setValue(event.target.value)
    };

    return(
        <div className={'wrapper'}>
            <select value={value} onChange={handleChange} className={'wrapper__select'}>
                {options.map((element,index) =>
                    <option key={index} label={element.label} value={element.value} />
                )}
            </select>
            <span className={'wrapper__arrow'} />
        </div>
    )
};

Select.propTypes = {
    options: PropTypes.array,
};

export default Select
